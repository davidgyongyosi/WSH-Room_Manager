import { Program } from "./program.model";

export interface Room {
  name: string;
  capacity: number;
  programs: Program[];
}