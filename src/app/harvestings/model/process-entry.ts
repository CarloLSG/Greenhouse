export interface ProcessEntry {
  author: string;
  day: number;
  date:  string;
  time: string;
  hay?: number;
  corn?: number;
  guano?:number;
  cottonSeedCake?: number;
  soybeanMeal?: number;
  gypsum?: number;
  urea?: number;
  ammoniumSulphate?: number;
  activities?: string;
  temperature?: number;
  comment?: string;
  thermocoupleOne?: number;
  thermocoupleTwo?: number;
  thermocoupleThree?: number;
  averageThermocouple?: number;
  growRoom?: number;
  frequency?: number;
  freshAir?: number;
  recirculation?: number;
  airTemperature?: number;
  compostTemperature?: string;
  carbonDioxide?: number;
  airHydrogen?: number;
  setting?: number;
  processType?: string;
}
