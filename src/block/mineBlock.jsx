import hashBlock from '../hash/hashBlock';

const mineBlock = (block) => {
  let nonce = null;

  Array(500000)
    .fill()
    .some((el, i) => {
      let hash = hashBlock({
        ...block,
        nonce: i
      });

      return hash.substr(0, 4) === '0000' && (nonce = i);
    });

  return nonce;
}

export default mineBlock;
