import mapPush from './index';

test('A new item is pushed to the Array at the Key specified', () => {

    const map = new Map<string, string[]>();

    map.set('some-key', ['a', 'b', 'c']);

    const pushes = mapPush(map, 'some-key', 'd');

    const expected = new Map([
        ['some-key', ['a', 'b', 'c', 'd']]
    ]);

    expect(pushes).toBe(4);
    expect(map).toEqual(expected);

});

test('A new Array with the item is created at the Key specified', () => {

    const map = new Map<string, string[]>();

    const pushes = mapPush(map, 'some-key', 'a');

    const expected = new Map([
        ['some-key', ['a']]
    ]);

    expect(pushes).toBe(1);
    expect(map).toEqual(expected);

});

test('Map.set is called if the key specified is not an Array', () => {

    const map = new Map<string, string | string[]>();
	
	map.set('some-key', 'a');

    const pushes = mapPush(map, 'some-key', 'b');

    const expected = new Map([
        ['some-key', 'b']
    ]);

    expect(pushes).toBe(0);
    expect(map).toEqual(expected);

});

test('Throws if called without a Map', () => {
	
	const notMap: any = undefined;
	
	expect(() => mapPush(notMap, 'some-key', 'a')).toThrow();
	
});

test('Throws if called on something that is not a Map', () => {
	
	const notMap: any = {};
	
	expect(() => mapPush(notMap, 'some-key', 'a')).toThrow();
	
});