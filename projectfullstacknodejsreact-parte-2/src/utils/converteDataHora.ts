export const converteDateHours = (dataString: string) => {
    const dataHora = new Date(dataString);
    const date = dataHora.toISOString().split('T')[0];
    const hours = dataHora.toTimeString().split(' ')[0];
    return { date, hours };
  }
  