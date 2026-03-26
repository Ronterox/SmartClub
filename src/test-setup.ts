import { JSDOM } from "jsdom";

const dom = new JSDOM("<!DOCTYPE html><html><body><div id='root'></div></body></html>", {
  url: "http://localhost",
  pretendToBeVisual: true,
});

(global as any).document = dom.window.document;
(global as any).window = dom.window;
(global as any).navigator = dom.window.navigator;
(global as any).HTMLElement = dom.window.HTMLElement;
(global as any).DOMParser = dom.window.DOMParser;
(global as any).getComputedStyle = dom.window.getComputedStyle;
(global as any).matchMedia = dom.window.matchMedia;
