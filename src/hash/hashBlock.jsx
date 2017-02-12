import sha256 from 'sha256';

const hashBlock = ({blockNumber, nonce, data}) => sha256(blockNumber + nonce + data);

export default hashBlock;
