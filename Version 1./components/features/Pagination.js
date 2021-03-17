import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  UNSAFE_componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className="pagination inline-flex flex-wrap items-center space-x-6 bg-gray-100 md:px-4 md:py-1 rounded-xl font-bold w-full">
        <div className="space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0 px-2 py-4 m-auto">
          <div className="flex items-center space-x-4 text-center justify-center">
            <div
              className={`${
                pager.currentPage === 1 ? "disabled" : ""
              } bg-red-200 px-2 rounded-md cursor-pointer`}
            >
              <a onClick={() => this.setPage(1)}>First</a>
            </div>
            <div
              className={`${
                pager.currentPage === 1 ? "disabled" : ""
              } bg-red-200 px-2 rounded-md cursor-pointer`}
            >
              <a onClick={() => this.setPage(pager.currentPage - 1)}>
                Previous
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {pager.pages.map((page, index) => (
              <div
                key={index}
                className={`${
                  pager.currentPage === page ? "active" : ""
                } text-gray-400 cursor-pointer `}
              >
                <a
                  className={`${
                    pager.currentPage === page ? "bg-red-200 text-black" : ""
                  } p-2 rounded-md hover:bg-gray-200`}
                  onClick={() => this.setPage(page)}
                >
                  {page}
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-center justify-center">
            <div
              className={`${
                pager.currentPage === pager.totalPages ? "disabled" : ""
              } bg-red-200 px-2 rounded-md cursor-pointer`}
            >
              <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </div>
            <div
              className={`${
                pager.currentPage === pager.totalPages ? "disabled" : ""
              } bg-red-200 px-2 rounded-md cursor-pointer`}
            >
              <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
