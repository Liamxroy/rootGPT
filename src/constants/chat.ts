import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are a large language model. You answer as concisely as possible for each response. Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-4.1',
  'gpt-4o',
  'gpt-4o-2024-11-20',
  'gpt-4o-mini',
  'gpt-4o-mini-2024-07-18',
  'gpt-4-turbo',
  'gpt-4-turbo-2024-04-09',
  'gpt-4-0125-preview',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0125',
  'o1',
  'o1-2024-12-17',
  'o1-mini',
  'deepseek-chat',
  'deepseek-reasoner',
  'claude-3.5-sonnet',
  'claude-3.5-haiku',
  'claude-3-opus',
  'mistral-large',
  'mixtral-8x7b-instruct',
  'llama-3-70b-instruct',
  'grok-3-early',
  'grok-2',
  'sonar-reasoning-pro',
  'mythomax-l2-13b',
  'wizardlm-2-8x22b',
  'qwen-turbo'
];

export const defaultModel = 'gpt-4o';

export const modelMaxToken = {
  'gpt-4.1': 128000,
  'gpt-4o': 128000,
  'gpt-4o-2024-11-20': 128000,
  'gpt-4o-mini': 128000,
  'gpt-4o-mini-2024-07-18': 128000,
  'gpt-4-turbo': 128000,
  'gpt-4-turbo-2024-04-09': 128000,
  'gpt-4-0125-preview': 128000,
  'gpt-3.5-turbo': 16384,
  'gpt-3.5-turbo-0125': 16384,
  'o1': 128000,
  'o1-2024-12-17': 128000,
  'deepseek-chat': 128000,
  'deepseek-reasoner': 128000,
  'claude-3.5-sonnet': 200000,
  'claude-3.5-haiku': 200000,
  'claude-3-opus': 200000,
  'mistral-large': 128000,
  'mixtral-8x7b-instruct': 128000,
  'llama-3-70b-instruct': 128000,
  'grok-3-early': 128000,
  'grok-2': 128000,
  'sonar-reasoning-pro': 128000,
  'mythomax-l2-13b': 128000,
  'wizardlm-2-8x22b': 128000,
  'qwen-turbo': 128000
};

export const modelCost = {
  'gpt-4.1': { prompt: { price: 0.00000125, unit: 1 }, completion: { price: 0.000005, unit: 1 } },
  'gpt-4o': { prompt: { price: 0.00000125, unit: 1 }, completion: { price: 0.000005, unit: 1 } },
  'gpt-4o-2024-11-20': { prompt: { price: 0.00000125, unit: 1 }, completion: { price: 0.000005, unit: 1 } },
  'gpt-4o-mini': { prompt: { price: 7.5E-8, unit: 1 }, completion: { price: 3E-7, unit: 1 } },
  'gpt-4-turbo': { prompt: { price: 0.000005, unit: 1 }, completion: { price: 0.000015, unit: 1 } },
  'gpt-4-0125-preview': { prompt: { price: 0.000005, unit: 1 }, completion: { price: 0.000015, unit: 1 } },
  'gpt-3.5-turbo': { prompt: { price: 2.5E-7, unit: 1 }, completion: { price: 7.5E-7, unit: 1 } },
  'o1': { prompt: { price: 0.0000075, unit: 1 }, completion: { price: 0.00003, unit: 1 } },
  'o1-2024-12-17': { prompt: { price: 0.0000075, unit: 1 }, completion: { price: 0.00003, unit: 1 } },
  'deepseek-chat': { prompt: { price: 7E-8, unit: 1 }, completion: { price: 1.4E-7, unit: 1 } },
  'deepseek-reasoner': { prompt: { price: 2.75E-7, unit: 1 }, completion: { price: 0.000001095, unit: 1 } },
  'claude-3.5-sonnet': { prompt: { price: 0.0000015, unit: 1 }, completion: { price: 0.0000075, unit: 1 } },
  'claude-3.5-haiku': { prompt: { price: 4E-7, unit: 1 }, completion: { price: 0.000002, unit: 1 } },
  'claude-3-opus': { prompt: { price: 0.0000075, unit: 1 }, completion: { price: 0.0000375, unit: 1 } },
  'mistral-large': { prompt: { price: 0.000001, unit: 1 }, completion: { price: 0.000003, unit: 1 } },
  'mixtral-8x7b-instruct': { prompt: { price: 2.25E-7, unit: 1 }, completion: { price: 2.5E-7, unit: 1 } },
  'llama-3-70b-instruct': { prompt: { price: 4.2E-7, unit: 1 }, completion: { price: 4.45E-7, unit: 1 } },
  'grok-3-early': { prompt: { price: 0.0000025, unit: 1 }, completion: { price: 0.0000075, unit: 1 } },
  'grok-2': { prompt: { price: 0.000001, unit: 1 }, completion: { price: 0.000005, unit: 1 } },
  'sonar-reasoning-pro': { prompt: { price: 0.000001, unit: 1 }, completion: { price: 0.000004, unit: 1 } },
  'mythomax-l2-13b': { prompt: { price: 3.25e-8, unit: 1 }, completion: { price: 3.25e-8, unit: 1 } },
  'wizardlm-2-8x22b': { prompt: { price: 2.5e-7, unit: 1 }, completion: { price: 2.5e-7, unit: 1 } },
  'qwen-turbo': { prompt: { price: 2.5e-8, unit: 1 }, completion: { price: 1e-7, unit: 1 } }
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (title?: string, folder?: string): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages: useStore.getState().defaultSystemMessage.length > 0
    ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
    : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];