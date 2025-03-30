import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../Dashboard";

jest.mock("../Navbar", () => () => <nav data-testid="navbar" />);
jest.mock("../Cards", () => ({ item }:any) => (
  <div data-testid="item-card">{item.title}</div>
));
jest.mock("../TaskRecords", () => () => <div data-testid="task-records" />);
jest.mock("../IntroSection", () => () => <div data-testid="intro-section" />);

describe("Dashboard Component", () => {
  test("renders Navbar", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("renders IntroSection", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("intro-section")).toBeInTheDocument();
  });

  test("renders ItemCards", () => {
    render(<Dashboard />);
    const itemCards = screen.getAllByTestId("item-card");
    expect(itemCards).toHaveLength(4);
    expect(itemCards[0]).toHaveTextContent("Item 1");
  });

  test("renders TaskRecords", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("task-records")).toBeInTheDocument();
  });

  test("renders Send Money button on small screens", () => {
    render(<Dashboard />);
    expect(screen.getByText("Send money")).toBeInTheDocument();
  });
});