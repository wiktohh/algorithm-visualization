export const enum SORT {
  BUBBLE = "bubble",
  INSERTION = "insertion",
  QUICK = "quick",
  MERGE = "merge",
}

export const options = [
  { label: "Bubble Sort", value: SORT.BUBBLE },
  { label: "Insertion Sort", value: SORT.INSERTION },
  { label: "Quick Sort", value: SORT.QUICK },
  { label: "Merge Sort", value: SORT.MERGE },
];
