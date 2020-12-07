import parseCoordinatesFromJSONFiles, { readFile, parseCoordinatesFromFileReaders } from './parseCoordinatesFromJSONFiles';

describe('readFile', () => {
  it('should read file async', async () => {
    const file =  new File(["foo"], "foo.txt", {
      type: "text/plain",
    });

    const res = await readFile(file);

    expect(res.result).toBe('foo');
  });
});

describe('parseCoordinatesFromFileReaders', () => {
  it('should return array of coordinates from fileReaders', () => {
    const mockedFileReaders = [
      { result: '[{"x": 10, "y": 20}, {"x": 20, "y": 30}]'},
      { result: '[{"x": 11, "y": 21}, {"x": 21, "y": 31}]'}
    ];

    expect(
      parseCoordinatesFromFileReaders(mockedFileReaders)
    ).toEqual(expect.arrayContaining([
      expect.objectContaining({ x: 10, y: 20 }),
      expect.objectContaining({ x: 11, y: 21 }),
      expect.objectContaining({ x: 20, y: 30 }),
      expect.objectContaining({ x: 21, y: 31 })
    ]));
  });
});

describe('parseCoordinatesFromJSONFiles', () => {
  it('should return array of objects from json files', async () => {
    const coordinateFiles = [
      new File(['[{"x": 10, "y": 20}, {"x": 20, "y": 30}]'], 'coor.json', { type: 'application/json' }),
      new File(['[{"x": 11, "y": 21}, {"x": 21, "y": 31}]'], 'coor2.json', { type: 'application/json' }),
    ];

    expect(
      await parseCoordinatesFromJSONFiles(coordinateFiles)
    ).toEqual(expect.arrayContaining([
      expect.objectContaining({ x: 10, y: 20 }),
      expect.objectContaining({ x: 11, y: 21 }),
      expect.objectContaining({ x: 20, y: 30 }),
      expect.objectContaining({ x: 21, y: 31 })
    ]));
  });
});
