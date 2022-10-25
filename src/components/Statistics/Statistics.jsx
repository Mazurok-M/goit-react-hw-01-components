import PropTypes from 'prop-types';

import styles from './statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{backgroundColor:getRandomHexColor()}} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
