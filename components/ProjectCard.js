import React from "react";
import ProjectGoButton from "../components/ProjectGoButton";
import ProjectImageGallery from "../components/ProjectImageGallery";
import styled from "styled-components";
import Delayed from "../components/features/Delayed";

export default function ProjectCard({
  statusproject,
  colorstatusproject,
  colorstatusmyworkatproject,
  myworkingstatusforthisproject,
  titleproject,
  description,
  role,
  workingtimeline,
  dataimg,
  websiteurl,
  messageurl,
  callurl,
  websitename,
  emailname,
}) {
  return (
    <div className="border-4 p-2 rounded-md">
      <ProjectImageGallery data={dataimg} />
      <div className="my-0">
        <div className="flex items-center -my-1">
          <Delayed waitBeforeShow={600}>
            <div>
              <div className="flex items-center mb-1">
                <span className="flex relative h-3 w-3">
                  <StatusButtonWrapperAnimatePart
                    colory={colorstatusproject}
                    className="animate-ping absolute h-3 w-3 rounded-full opacity-75"
                  ></StatusButtonWrapperAnimatePart>
                  <StatusButtonWrapperMainPart
                    colorx={colorstatusproject}
                    className="h-3 w-3 rounded-full opacity-75"
                  ></StatusButtonWrapperMainPart>
                </span>
                <p className="text-xs uppercase font-medium px-2">
                  {statusproject}
                </p>
              </div>
              <div className="flex items-center">
                <span className="flex relative h-3 w-3">
                  <StatusButtonWrapperAnimatePart
                    colory={colorstatusmyworkatproject}
                    className="animate-ping absolute h-3 w-3 rounded-full opacity-40"
                  ></StatusButtonWrapperAnimatePart>
                  <StatusButtonWrapperMainPart
                    colorx={colorstatusmyworkatproject}
                    className="h-3 w-3 rounded-full opacity-75"
                  ></StatusButtonWrapperMainPart>
                </span>
                <p className="text-xs uppercase font-medium px-2">
                  {myworkingstatusforthisproject}
                </p>
              </div>
            </div>
          </Delayed>
          <div className="mb-2 ml-2 pt-1">
            <ProjectGoButton
              websitepass={websiteurl}
              messagepass={messageurl}
              callpass={callurl}
              websitenamepass={websitename}
              emailnamepass={emailname}
            />
          </div>
        </div>
        <h2 className="mb-2 font-bold text-xl">{titleproject}</h2>
        <p className="mb-2 text-sm">{description}</p>
        <div className="flex items-center mb-2">
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgba(249, 191, 59, 1)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400 ml-1">{role}</p>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-sm ml-1">{workingtimeline}</p>
        </div>
      </div>
    </div>
  );
}

const StatusButtonWrapperAnimatePart = styled.span`
  background-color: ${(props) => props.colory};
`;

const StatusButtonWrapperMainPart = styled.span`
  background-color: ${(props) => props.colorx};
`;
