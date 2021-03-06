import { asciiUppercase } from "./asciiUppercase";
import { assertParameterIsNaturalNumber } from "./assertParameterIsNaturalNumber";

/**
 * convert a number to a letter header
 * `0 -> A`
 * `1 -> B`
 * `26 -> BA`
 * `27 -> BB`
 * etc..
 * @param n - natural number to convert to letter header
 * @public
 */
export function letterHeader(n: number) {
    assertParameterIsNaturalNumber("n", n);

    // modulo 26
    let current = n;
    const index = asciiUppercase;
    const size = index.length;
    const places: number[] = [];

    while (current >= size) {
        const place = current % size;
        places.push(place);
        current = Math.floor(current / size);
    }

    places.push(current);

    // remap to appropriate letter
    return places
        .reverse()
        .map((n) => index[n])
        .join("");
}
