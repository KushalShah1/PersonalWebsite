import React from "react";

export const SectionContainer: React.FC<{
    id: string;
    badge: string;
    title: string;
    children?: React.ReactNode
    center?: boolean
}> =(props) => {
    return (
      <div id={props.id} className={`flex flex-col px-12 ${props.center ? 'items-center' : ''}`}>
        <span className="px-6 py-2 rounded-2xl bg-t-green-hover text-t-green font-semibold text-lg w-fit">
          {props.badge}
        </span>
        <span className="font-semibold md:text-5xl text-3xl py-6">{props.title}</span>

        {props.children}
      </div>
    );
}