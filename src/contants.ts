export const enum SORT {
  BUBBLE = "bubble",
  INSERTION = "insertion",
  QUICK = "quick",
  MERGE = "merge",
  SELECTION = "selection",
}

export const options = [
  { label: "Bubble Sort", value: SORT.BUBBLE },
  { label: "Insertion Sort", value: SORT.INSERTION },
  { label: "Quick Sort", value: SORT.QUICK },
  { label: "Merge Sort", value: SORT.MERGE },
  { label: "Selection Sort", value: SORT.SELECTION },
];

export const algorithmInfo = [
  {
    name: "Bubble Sort",
    description: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    details: {
      stability: "Stable",
      inPlace: "Yes",
      timeComplexity: {
        bestCase: "O(n)",
        averageCase: "O(n^2)",
        worstCase: "O(n^2)"
      }
    }
  },
  {
    name: "Insertion Sort",
    description: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    details: {
      stability: "Stable",
      inPlace: "Yes",
      timeComplexity: {
        bestCase: "O(n)",
        averageCase: "O(n^2)",
        worstCase: "O(n^2)"
      }
    }
  },
  {
    name: "Quick Sort",
    description: "Quicksort is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.",
    details: {
      stability: "Unstable (can be adjusted)",
      inPlace: "Yes",
      timeComplexity: {
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
        worstCase: "O(n^2)"
      }
    }
  },
  {
    name: "Merge Sort",
    description: "Merge sort is an efficient, stable, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.",
    details: {
      stability: "Stable",
      inPlace: "No (requires additional memory)",
      timeComplexity: {
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
        worstCase: "O(n log n)"
      }
    }
  },
  {
    name: "Selection Sort",
    description: "Selection sort is an in-place comparison sorting algorithm. It has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.",
    details: {
      stability: "Unstable",
      inPlace: "Yes",
      timeComplexity: {
        bestCase: "O(n^2)",
        averageCase: "O(n^2)",
        worstCase: "O(n^2)"
      }
    }
  }
];


