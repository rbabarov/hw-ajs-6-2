export default function showSkills(obj) {
  const result = [];

  for (let i = 0; i < obj.special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj.special[i];

    result.push({
      id, name, icon, description,
    });
  }

  return result;
}
