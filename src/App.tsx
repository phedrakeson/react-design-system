import { Heading } from './components/Heading/Heading';
import { Text } from './components/Text/Text';
import { TextInput } from './components/TextInput/TextInput';
import { Logo } from './Logo';
import { Envelope, Lock } from 'phosphor-react';

import './styles/global.css';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Button } from './components/Button/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <Logo />
      <header className="flex flex-col items-center">
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="*****"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Esqueceu sua senha?
            </a>
          </Text>

          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </form>
    </div>
  );
}
