"use client";

import Image from "next/image";
import classes from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import "./editor.css";
import { useEffect } from "react";
import React from "react";
import { Button } from "@digdir/design-system-react";
import cn from "classnames";
import { ExampleCode } from "./code";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  const [nestedMenu, setNested] = React.useState<any>(null);
  const [items, setItems] = React.useState([]);
  const [code, setCode] = React.useState(ExampleCode);

  const test = () => {
    let json = JSON.parse(code);
    let boxes = json["boxes"];
    let layout = json["layout"];

    let myItems: any = [];

    layout.map((item: any, index: number) => {
      let row: any = {};
      row.cols = [];
      row.totalRows = layout.lenght;
      item.cols.map((col: any, colIndex: number) => {
        row.cols[colIndex] = [];
        col.col.map((col2: any, colIndex2: number) => {
          let currentBox = boxes.filter((box: any) => {
            return box.id === col2;
          });

          if (currentBox.length > 0) {
            currentBox = currentBox[0];
            currentBox.items = boxes.filter((box2: any) => {
              return currentBox.id === box2.parent;
            });

            row.cols[colIndex].push(currentBox);
          }
        });
        row.colLength = row.cols.length;
      });
      myItems.push(row);
    });
    console.log(myItems);
    setItems(myItems);
  };

  useEffect(() => {
    test();
  }, []);

  const createLineStyles = (rowItem: any, colItem: any, boxItem: any) => {
    return {
      backgroundColor: "#1e2b3c",
    };
  };

  const createMain = (rowItem: any) => {
    if (rowItem.colLength === 51) {
      return {
        height: "400px",
      };
    }
  };

  type BoxProps = {
    link: string;
    children: React.ReactNode;
    href: string;
    target: string;
    className: string;
    style: any;
  };

  const Box = ({ link, children, ...props }: BoxProps) => {
    return React.createElement(link ? "a" : "div", props, children);
  };

  return (
    <main className={classes.main}>
      <div className={classes.sidebar}>d</div>
      <div className={classes.content}>d</div>
    </main>
  );
}
