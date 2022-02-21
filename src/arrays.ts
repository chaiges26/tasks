/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let endList: number[] = [];
    if (numbers.length === 0) {
        endList = [];
    }
    if (numbers.length === 1) {
        endList = [...numbers, ...numbers];
    }
    if (numbers.length > 1) {
        endList = [numbers[0], numbers[numbers.length - 1]];
    }
    return endList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triples = numbers.map((num: number): number => num * 3);
    return triples;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //let converted: number[] =[];
    const converted = numbers.map((entry: string): number => parseInt(entry));
    const final = converted.map((entry: number): number =>
        isNaN(entry) ? (entry = 0) : entry
    );

    return final;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDolla = amounts.map((num: string): string =>
        num.includes("$") ? num.replace("$", "") : num
    );
    const final = stringsToIntegers(noDolla);
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQs = messages.filter(
        (entry: string): boolean => !entry.includes("?")
    );
    const allCaps = noQs.map((entry: string): string =>
        entry.includes("!") ? entry.toUpperCase() : entry
    );
    return allCaps;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lower = words.filter((word: string): boolean => word.length < 4);
    return lower.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (allRGB.length === 0) {
        return true;
    }
    const allGBR = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
    return allGBR;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const toString = addends.map((num: number): string => num.toString());
    const equation = toString.join("+");
    const final = sum + "=" + equation;
    return final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        const res = [0];
        return res;
    }
    if (values.every((num: number): boolean => num > 0)) {
        const sum = values.reduce(
            (total: number, num: number): number => (total += num)
        );
        const res = [...values, sum];
        return res;
    } else {
        const position = values.findIndex((num: number): boolean => num < 0);
        const halfArray = values.slice(0, position);
        const sum = halfArray.reduce(
            (total: number, num: number): number => (total += num),
            0
        );
        const res: number[] = [...values];
        res.splice(position + 1, 0, sum);
        return res;
    }
}
