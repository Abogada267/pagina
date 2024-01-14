import clsx from 'clsx';

function Price ({ price, currency, ...props }) {
  // Verificar si currency está definido
  if (!currency) {
    return <span className={clsx('font-bold text-md', props.className)}>Precio no disponible</span>;
  }

  return (
    <span className={clsx('font-bold text-md', props.className)}>
      {new Intl
        .NumberFormat('es-AR', {
          style: 'currency',
          currency,
          maximumFractionDigits: 0,
          currencyDisplay: 'symbol'
        })
        .format(price)
        .concat(` (${currency})`)}
    </span>
  );
}

export default Price;