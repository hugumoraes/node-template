import { prompt } from 'enquirer';

interface InputPrompt {
  name: string;
  message: string;
  placeholder: string;
}

export const Input = async ({ name, message, placeholder }: InputPrompt) => {
  return prompt<Record<string, string>>({
    type: 'input',
    name,
    message,
    initial: placeholder,
  });
};
