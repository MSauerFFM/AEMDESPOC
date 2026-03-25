export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((div) => {
		div.className = 'miau';
		div.innerHTML  = "MIAU"
    });
  });
}