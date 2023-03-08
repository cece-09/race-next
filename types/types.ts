import { Database } from "./database";

export type GrandPrix = Database["public"]["Tables"]["grandprix"];
export type Season = Database["public"]["Tables"]["season"];
export type Circuit = Database["public"]["Tables"]["circuit"];
export type SeasonTeam = Database["public"]["Tables"]["season_team"];
export type SeasonTeamDriver =
  Database["public"]["Tables"]["season_team_driver"];
export type Team = Database["public"]["Tables"]["team"];
export type Driver = Database["public"]["Tables"]["driver"];

type Column = {
  id: string; // id of column in db
  name: string; // name to show in site
  type: string; // type of column
  ref?: string; // ref table, if exists
};

type Table = {
  id: string; // must be identical to db table name
  name: string; // table name to show users
  icon: string; // table icon to show users
  cols: Column[]; // list of table columns
};

type Site = {
  title: string;
  favicon?: string;
  author?: string;
  menus: Table[];
};

export const mySite = {} as Site;

mySite.title = "F1 Race Reivew";
mySite.author = "CECE LEE";

const CAR = {} as Table;
const TEAM = {} as Table;
const SEASON = {} as Table;
const DRIVER = {} as Table;
const REVIEW = {} as Table;
const CIRCUIT = {} as Table;
const GRANDPRIX = {} as Table;

// CAR TABLE
CAR.id = "car";
CAR.name = "car";
CAR.icon = "HiCar";
CAR.cols = [
  { id: "team_id", name: "team", type: "select", ref: "team" },
  { id: "year", name: "season", type: "number" },
  { id: "name", name: "name", type: "text" },
  { id: "image", name: "image", type: "image" },
  { id: "launch_date", name: "launch date", type: "date" },
];

// TEAM TABLE
TEAM.id = "season_team";
TEAM.name = "team";
TEAM.icon = "HiTeam";
TEAM.cols = [
  { id: "team_id", name: "team", type: "select", ref: "team" },
  { id: "year", name: "season", type: "select", ref: "season" },
  { id: "name", name: "full name", type: "text" },
  { id: "base", name: "base", type: "text" },
];

// SEASON TABLE
SEASON.id = "season";
SEASON.name = "season";
SEASON.icon = "HiCalendar";
SEASON.cols = [{ id: "year", name: "season", type: "number" }];

// DRIVER TABLE

// GRAND PRIX TABLE
GRANDPRIX.id = "grandprix";
GRANDPRIX.name = "race";
GRANDPRIX.icon = "HiHeart";
GRANDPRIX.cols = [
  { id: "year", name: "season", type: "select", ref: "season" },
  { id: "circuit_id", name: "circuit", type: "select", ref: "circuit" },
  { id: "name", name: "name", type: "text" },
  { id: "info", name: "information", type: "textarea" },
  { id: "image", name: "image", type: "image" },
];
