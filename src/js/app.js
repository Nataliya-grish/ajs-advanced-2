export default function dataSorting(character) {
  const arr = [];
  for (const key of character.special) {
    const {
      id, name, icon, description = "Описание недоступно",
    } = key;
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
