// x, y = center coordinates
function getHexagonPath(x: number, y: number, sideLength: number) {
  const angle = Math.PI / 3;
  const points = [];

  for (let i = 0; i < 6; i++) {
    const px = x + sideLength * Math.cos(angle * i - Math.PI / 2);
    const py = y + sideLength * Math.sin(angle * i - Math.PI / 2);
    points.push(`${px},${py}`);
  }

  return `M${points.join('L')}Z`;
}

// main grid
function generateHexagonIslands(
  width: number,
  height: number,
  sideLength: number,
  probability: number
) {
  const islands: any[] = [];
  const maxX = width + sideLength;
  const maxY = height + sideLength;
  const minHorizontalSpacing = sideLength * Math.sqrt(3);
  const minVerticalSpacing = sideLength * 1.9;

  for (
    let x = -sideLength;
    x < maxX;
    x += minHorizontalSpacing * (1 + Math.random())
  ) {
    for (
      let y = -sideLength;
      y < maxY;
      y += minVerticalSpacing * (1 + Math.random())
    ) {
      if (Math.random() < probability) {
        const hexagon = {
          x,
          y,
          sideLength,
          path: getHexagonPath(x, y, sideLength),
        };

        islands.push(hexagon);
      }
    }
  }

  return islands;
}

function renderHexagonIslands(islands: any[], svgElement: Element) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('stroke', 'black');
  svg.setAttribute(
    'viewBox',
    `0 0 ${svgElement.clientWidth} ${svgElement.clientHeight}`
  );

  islands.forEach(island => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', island.path);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-width', '3px');
    svg.appendChild(path);
  });

  svgElement.appendChild(svg);
}

export { getHexagonPath, generateHexagonIslands, renderHexagonIslands };
