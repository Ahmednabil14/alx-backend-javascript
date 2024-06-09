export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue = [mathFunction(), 'Guardrail was processed'];
  } catch (error) {
    queue = [`${error}`, 'Guardrail was processed'];
  }
  return queue;
}
