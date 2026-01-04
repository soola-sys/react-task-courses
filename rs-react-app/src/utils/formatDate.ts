function padByZero(input: number | Date) {
  return input.toString().padStart(2, '0');
}

export const formatDate = (dateStr: string) => {
  if(typeof dateStr === 'string') {
    const date = new Date(dateStr);
    const month = padByZero(date.getMonth() + 1);
    const day = padByZero(date.getDate());
    const year = padByZero(date.getFullYear());
    return `${day}.${month}.${year}`;
  }
}