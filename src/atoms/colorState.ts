import { atom } from 'recoil'

interface GenerateRandomColor {
  (): string
}

const range = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i);
}

const pick = (range: number): number => Math.floor(Math.random() * range)

export const generateRandomColor: GenerateRandomColor = () => {
  const LETTERS = '0123456789ABCDEF'
  /*
  let color = '#'; //  문자열 다음에 바로 오는 [] 배열 연산자는 속성 접근자로 취급하여 세미콜론 필수!!!!

  for (let i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 16)];
  }
  
  [0,1,2,3,4,5].forEach(() => {
    color += LETTERS[Math.floor(Math.random() * 16)];
  })
  */
  return '#' + range(6)
            .map((): string => LETTERS[pick(16)])
            .join('');
}

export function getUniqueColor(existingColors: Set<string>): string {
  let newColor: string;
  do {
    newColor = generateRandomColor();
  } while (existingColors.has(newColor));
  return newColor;
}

