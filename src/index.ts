type UnknownMap = Map<unknown, unknown>;

/**
 * Pushes the value provided to an entry of type Array corresponding to the key specified.
 * If no entry exists with the key given, a new entry of type Array initialized with the value specified is created.
 * If an entry exists and is not of type array, this method will call Map.set() with the key and value provided.
 * @param map The Map instance to work with
 * @param key The key of an Array entry to push the value to
 * @param value The value to push to the Array entry
 */
export default function mapPush(map: UnknownMap, key: unknown, value: unknown): number {

    if (!map || !(map instanceof Map)) throw new Error('You must pass an instance of Map to mapPush');

    //If an entry with the key provided already exists we can check what type that entry is to decide what to do
    if (map.has(key)) {

        const entry = map.get(key);

        //If it's an Array we simply push the new value into the array
        if (Array.isArray(entry)) {

            const entryAsArray = entry as Array<unknown>;

            return entryAsArray.push(value);
        }
        //If the entry is not an Array we fallback to default Map.set behavior
        else {

            map.set(key, value);

            return 0;

        }

    }
    //If an entry does not already exists with the key provided, we create a new entry of type Array with the value given
    else {

        const newArrayEntry = [value];

        map.set(key, newArrayEntry);

        return 1;
    }

}