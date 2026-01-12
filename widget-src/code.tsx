const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, Input, Frame } = widget;

function RandomNumberGeneratorWidget() {
  const [minValue, setMinValue] = useSyncedState<string>("minValue", "");
  const [maxValue, setMaxValue] = useSyncedState<string>("maxValue", "");
  const [result, setResult] = useSyncedState<number | null>("result", null);

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

  return (
    <AutoLayout
      name="Random Number Generator"
      direction="vertical"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      spacing={24}
      padding={{ top: 40, bottom: 40, left: 48, right: 48 }}
      cornerRadius={8}
      fill="#cfcfcf"
      width={420}
    >
      {/* Title */}
      <Text
        fontFamily="IBM Plex Mono"
        fontWeight={600}
        fontSize={24}
        fill="#000000"
      >
        Random number generator
      </Text>

      {/* Inputs Container */}
      <AutoLayout
        direction="vertical"
        spacing={16}
        horizontalAlignItems="center"
      >
        {/* Minimum Value Input */}
        <AutoLayout
          direction="horizontal"
          spacing={16}
          verticalAlignItems="center"
        >
          <Text
            fontFamily="IBM Plex Mono"
            fontWeight={500}
            fontSize={12}
            fill="#000000"
          >
            Minimum value:
          </Text>
          <AutoLayout
            fill="#eaeaea"
            stroke="#000000"
            strokeWidth={2}
            cornerRadius={2}
            padding={10}
            width={207}
            horizontalAlignItems="center"
            verticalAlignItems="center"
          >
            <Input
              fontFamily="IBM Plex Mono"
              fontWeight={500}
              fontSize={12}
              fill="#000000"
              inputBehavior="truncate"
              placeholder="Enter a value"
              value={minValue}
              onTextEditEnd={(e) => setMinValue(e.characters)}
              width="fill-parent"
            />
          </AutoLayout>
        </AutoLayout>

        {/* Maximum Value Input */}
        <AutoLayout
          direction="horizontal"
          spacing={16}
          verticalAlignItems="center"
        >
          <Text
            fontFamily="IBM Plex Mono"
            fontWeight={500}
            fontSize={12}
            fill="#000000"
          >
            Maximum value:
          </Text>
          <AutoLayout
            fill="#eaeaea"
            stroke="#000000"
            strokeWidth={2}
            cornerRadius={2}
            padding={10}
            width={207}
            horizontalAlignItems="center"
            verticalAlignItems="center"
          >
            <Input
              fontFamily="IBM Plex Mono"
              fontWeight={500}
              fontSize={12}
              fill="#000000"
              inputBehavior="truncate"
              placeholder="Enter a value"
              value={maxValue}
              onTextEditEnd={(e) => setMaxValue(e.characters)}
              width="fill-parent"
            />
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>

      {/* Result Display */}
      {result !== null && (
        <AutoLayout
          direction="vertical"
          spacing={8}
          horizontalAlignItems="center"
        >
          <Text
            fontFamily="IBM Plex Mono"
            fontWeight={500}
            fontSize={12}
            fill="#000000"
          >
            Generated number:
          </Text>
          <Text
            fontFamily="IBM Plex Mono"
            fontWeight={700}
            fontSize={32}
            fill="#2d3748"
          >
            {result.toString()}
          </Text>
        </AutoLayout>
      )}

      {/* Generate Button */}
      <AutoLayout
        fill={isDisabled ? "#5c6577" : "#4a5568"}
        stroke="#0c0c0c"
        strokeWidth={2}
        cornerRadius={2}
        padding={10}
        width={145}
        horizontalAlignItems="center"
        verticalAlignItems="center"
        opacity={isDisabled ? 0.5 : 1}
        onClick={isDisabled ? undefined : generateRandomNumber}
        hoverStyle={isDisabled ? undefined : { fill: "#3d4555" }}
      >
        <Text
          fontFamily="IBM Plex Mono"
          fontWeight={500}
          fontSize={12}
          fill="#ffffff"
        >
          {result !== null ? "Re-generate" : "Generate"}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(RandomNumberGeneratorWidget);

