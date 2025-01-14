import { createNewItem } from "./create_new_item.js";

// Taxas de conversão organizadas
const conversionRates = {
  weight: [
    {
      type: "kilograms_to_pounds",
      factor: 2.20462,
      abbreviation: "kg_to_lb",
      to: "pounds",
    },
    {
      type: "pounds_to_kilograms",
      factor: 0.453592,
      abbreviation: "lb_to_kg",
      to: "kilograms",
    },
    {
      type: "grams_to_ounces",
      factor: 0.035274,
      abbreviation: "g_to_oz",
      to: "ounces",
    },
    {
      type: "ounces_to_grams",
      factor: 28.3495,
      abbreviation: "oz_to_g",
      to: "grams",
    },
    {
      type: "tonnes_to_pounds",
      factor: 2204.62,
      abbreviation: "t_to_lb",
      to: "pounds",
    },
    {
      type: "pounds_to_tonnes",
      factor: 0.000453592,
      abbreviation: "lb_to_t",
      to: "tonnes",
    },
    {
      type: "kilograms_to_grams",
      factor: 1000,
      abbreviation: "kg_to_g",
      to: "grams",
    },
    {
      type: "grams_to_kilograms",
      factor: 0.001,
      abbreviation: "g_to_kg",
      to: "kilograms",
    },
    {
      type: "tonnes_to_kilograms",
      factor: 1000,
      abbreviation: "t_to_kg",
      to: "kilograms",
    },
    {
      type: "kilograms_to_tonnes",
      factor: 0.001,
      abbreviation: "kg_to_t",
      to: "tonnes",
    },
  ],
  length: [
    {
      type: "meters_to_feet",
      factor: 3.28084,
      abbreviation: "m_to_ft",
      to: "feet",
    },
    {
      type: "feet_to_meters",
      factor: 0.3048,
      abbreviation: "ft_to_m",
      to: "meters",
    },
    {
      type: "centimeters_to_inches",
      factor: 0.393701,
      abbreviation: "cm_to_in",
      to: "inches",
    },
    {
      type: "inches_to_centimeters",
      factor: 2.54,
      abbreviation: "in_to_cm",
      to: "centimeters",
    },
    {
      type: "kilometers_to_miles",
      factor: 0.621371,
      abbreviation: "km_to_mi",
      to: "miles",
    },
    {
      type: "miles_to_kilometers",
      factor: 1.60934,
      abbreviation: "mi_to_km",
      to: "kilometers",
    },
    {
      type: "meters_to_centimeters",
      factor: 100,
      abbreviation: "m_to_cm",
      to: "centimeters",
    },
    {
      type: "centimeters_to_meters",
      factor: 0.01,
      abbreviation: "cm_to_m",
      to: "meters",
    },
    {
      type: "kilometers_to_meters",
      factor: 1000,
      abbreviation: "km_to_m",
      to: "meters",
    },
    {
      type: "meters_to_kilometers",
      factor: 0.001,
      abbreviation: "m_to_km",
      to: "kilometers",
    },
    {
      type: "miles_to_inches",
      factor: 63360,
      abbreviation: "mi_to_in",
      to: "inches",
    },
    {
      type: "inches_to_miles",
      factor: 0.0000157828,
      abbreviation: "in_to_mi",
      to: "miles",
    },
  ],
};

// Função genérica de conversão
const processConversion = (inputValue, conversionList, icon) => {
  conversionList.forEach((item) => {
    const abbreviation = item.abbreviation.replace(/_/g, " ");
    const regexConverter = new RegExp(
      `[0-9]+(\\.[0-9]+)?\\s?${abbreviation}`,
      "i"
    );

    if (regexConverter.test(inputValue)) {
      const valueToConvert = parseFloat(
        inputValue.replace(new RegExp(`\\s?${abbreviation}`, "i"), "")
      );
      const result = (valueToConvert * item.factor).toFixed(4); // Resultado arredondado

      createNewItem({
        title: `${abbreviation} | ${result} ${item.to}`,
        subtitle: `Press Enter to copy | ${result} ${item.to}`,
        icon,
        action: "copy",
        data: `${result} ${item.to}`,
      });
    }
  });
};

// Ferramenta para conversão de peso e comprimento
export function conversionTool(inputValue) {
  processConversion(inputValue, conversionRates.weight, "weight");
  processConversion(inputValue, conversionRates.length, "straighten");
}
