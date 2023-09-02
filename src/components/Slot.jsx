import styles from '../styles/room.module.css';

function Slot({ slot, onSelect, isSelected }) {
  // console.log(slot);
  return (
    <button
      className={`${styles.slot} ${isSelected === slot.id ? 'active' : ''}`}
      disabled={slot.isTaken}
      onClick={() => onSelect(slot.id)}
    >
      {slot.time}
    </button>
  );
}

export default Slot;
