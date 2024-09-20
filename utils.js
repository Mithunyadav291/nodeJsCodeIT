function convertCtF(celcius) {
    const fahrenheit = (celcius * 9) / 5 + 32;
    return fahrenheit;
}

// module.exports = convertCtF; -->type=commonjs
export default convertCtF  // type= module