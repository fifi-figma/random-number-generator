"use strict";
(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var { useSyncedState, usePropertyMenu, AutoLayout, Text, Input, Frame } = widget;
  function RandomNumberGeneratorWidget() {
    const [minValue, setMinValue] = useSyncedState("minValue", "");
    const [maxValue, setMaxValue] = useSyncedState("maxValue", "");
    const [result, setResult] = useSyncedState("result", null);
    const generateRandomNumber = () => {
      const min = parseInt(minValue, 10);
      const max = parseInt(maxValue, 10);
      if (isNaN(min) || isNaN(max)) {
        figma.notify("Please enter valid numbers for both fields");
        return;
      }
      if (min > max) {
        figma.notify("Minimum value must be less than or equal to maximum value");
        return;
      }
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      setResult(randomNum);
    };
    const isDisabled = minValue === "" || maxValue === "";
    return /* @__PURE__ */ figma.widget.h(
      AutoLayout,
      {
        name: "Random Number Generator",
        direction: "vertical",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        spacing: 24,
        padding: { top: 40, bottom: 40, left: 48, right: 48 },
        cornerRadius: 8,
        fill: "#cfcfcf",
        width: 420
      },
      /* @__PURE__ */ figma.widget.h(
        Text,
        {
          fontFamily: "IBM Plex Mono",
          fontWeight: 600,
          fontSize: 24,
          fill: "#000000"
        },
        "Random number generator"
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          direction: "vertical",
          spacing: 16,
          horizontalAlignItems: "center"
        },
        /* @__PURE__ */ figma.widget.h(
          AutoLayout,
          {
            direction: "horizontal",
            spacing: 16,
            verticalAlignItems: "center"
          },
          /* @__PURE__ */ figma.widget.h(
            Text,
            {
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              fontSize: 12,
              fill: "#000000"
            },
            "Minimum value:"
          ),
          /* @__PURE__ */ figma.widget.h(
            AutoLayout,
            {
              fill: "#eaeaea",
              stroke: "#000000",
              strokeWidth: 2,
              cornerRadius: 2,
              padding: 10,
              width: 207,
              horizontalAlignItems: "center",
              verticalAlignItems: "center"
            },
            /* @__PURE__ */ figma.widget.h(
              Input,
              {
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                fontSize: 12,
                fill: "#000000",
                inputBehavior: "truncate",
                placeholder: "Enter a value",
                value: minValue,
                onTextEditEnd: (e) => setMinValue(e.characters),
                width: "fill-parent"
              }
            )
          )
        ),
        /* @__PURE__ */ figma.widget.h(
          AutoLayout,
          {
            direction: "horizontal",
            spacing: 16,
            verticalAlignItems: "center"
          },
          /* @__PURE__ */ figma.widget.h(
            Text,
            {
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              fontSize: 12,
              fill: "#000000"
            },
            "Maximum value:"
          ),
          /* @__PURE__ */ figma.widget.h(
            AutoLayout,
            {
              fill: "#eaeaea",
              stroke: "#000000",
              strokeWidth: 2,
              cornerRadius: 2,
              padding: 10,
              width: 207,
              horizontalAlignItems: "center",
              verticalAlignItems: "center"
            },
            /* @__PURE__ */ figma.widget.h(
              Input,
              {
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                fontSize: 12,
                fill: "#000000",
                inputBehavior: "truncate",
                placeholder: "Enter a value",
                value: maxValue,
                onTextEditEnd: (e) => setMaxValue(e.characters),
                width: "fill-parent"
              }
            )
          )
        )
      ),
      result !== null && /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          direction: "vertical",
          spacing: 8,
          horizontalAlignItems: "center"
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            fontSize: 12,
            fill: "#000000"
          },
          "Generated number:"
        ),
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontFamily: "IBM Plex Mono",
            fontWeight: 700,
            fontSize: 32,
            fill: "#2d3748"
          },
          result.toString()
        )
      ),
      /* @__PURE__ */ figma.widget.h(
        AutoLayout,
        {
          fill: isDisabled ? "#5c6577" : "#4a5568",
          stroke: "#0c0c0c",
          strokeWidth: 2,
          cornerRadius: 2,
          padding: 10,
          width: 145,
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          opacity: isDisabled ? 0.5 : 1,
          onClick: isDisabled ? void 0 : generateRandomNumber,
          hoverStyle: isDisabled ? void 0 : { fill: "#3d4555" }
        },
        /* @__PURE__ */ figma.widget.h(
          Text,
          {
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            fontSize: 12,
            fill: "#ffffff"
          },
          result !== null ? "Re-generate" : "Generate"
        )
      )
    );
  }
  widget.register(RandomNumberGeneratorWidget);
})();
