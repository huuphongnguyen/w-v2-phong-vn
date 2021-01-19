const TelegramComments = ({ pageid }) => (
  <TelegramComments
    customColor="fb9f9f"
    customHeight="450"
    commentsNumber={3}
    isDark
    pageId={pageid}
    showColorfulNames
    showDislikes
    showIconOutlines
    websiteKey={process.env.TELEGRAM_COMMENTS_APP_WEBSITE_ID}
    containerClassName="awesome-comments"
    wrapperClassName="awesome-comments__wrapper"
  />
);

export default TelegramComments;
