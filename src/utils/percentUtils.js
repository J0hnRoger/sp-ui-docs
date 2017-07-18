/**
 * Reusable Logic function - Pure function are easier to test
 */

export function getWidthAsPercentOfTotalWidth (percent, totalWidth) {
    return parseInt(totalWidth * (percent / 100), 10)
}
