import { Prompt } from './prompt';
import { Theme } from './theme';

export type Role = 'user' | 'assistant' | 'system';
export const roles: Role[] = ['user', 'assistant', 'system'];

export interface MessageInterface {
  role: Role;
  content: string;
}

export interface ChatInterface {
  id: string;
  title: string;
  folder?: string;
  messages: MessageInterface[];
  config: ConfigInterface;
  titleSet: boolean;
}

export interface ConfigInterface {
  model: ModelOptions;
  max_tokens: number;
  temperature: number;
  presence_penalty: number;
  top_p: number;
  frequency_penalty: number;
}

export interface ChatHistoryInterface {
  title: string;
  index: number;
  id: string;
}

export interface ChatHistoryFolderInterface {
  [folderId: string]: ChatHistoryInterface[];
}

export interface FolderCollection {
  [folderId: string]: Folder;
}

export interface Folder {
  id: string;
  name: string;
  expanded: boolean;
  order: number;
  color?: string;
}

export type ModelOptions =
| 'gpt-4.1'
| 'gpt-4.1-2025-04-14'
| 'gpt-4.1-mini'
| 'gpt-4.1-mini-2025-04-14'
| 'gpt-4.1-nano'
| 'gpt-4.1-nano-2025-04-14'
| 'gpt-4.5-preview'
| 'gpt-4.5-preview-2025-02-27'
| 'gpt-4o'
| 'gpt-4o-2024-11-20'
| 'gpt-4o-2024-08-06'
| 'gpt-4o-2024-05-13'
| 'gpt-4o-mini'
| 'gpt-4o-mini-2024-07-18'
| 'gpt-4-turbo'
| 'gpt-4-turbo-2024-04-09'
| 'gpt-4-0125-preview'
| 'gpt-4-1106-preview'
| 'gpt-4'
| 'gpt-4-0613'
| 'gpt-3.5-turbo'
| 'o1'
| 'o1-2024-12-17'
| 'o1-preview'
| 'o1-preview-2024-09-12'
| 'o1-mini'
| 'o1-mini-2024-09-12'
| 'o3'
| 'o3-2025-04-16'
| 'o3-mini'
| 'o3-mini-2025-01-31'
| 'o4-mini'
| 'o4-mini-2025-04-16'
| 'deepseek-chat'
| 'deepseek-reasoner'
| 'deepseek-prover-v2'
| 'claude-3.7-sonnet'
| 'claude-3.7-sonnet-20250219'
| 'claude-3.5-sonnet'
| 'claude-3.5-sonnet-20241022'
| 'claude-3.5-haiku'
| 'claude-3.5-haiku-20241022'
| 'claude-3-opus'
| 'claude-3-opus-20240229'
| 'claude-3-sonnet'
| 'claude-3-sonnet-20240229'
| 'claude-3-haiku'
| 'claude-3-haiku-20240307'
| 'mistral-large'
| 'mistral-large-2411'
| 'mistral-medium'
| 'mistral-medium-2505'
| 'mistral-small'
| 'mistral-small-2503'
| 'mistral-small-2501'
| 'mistral-saba'
| 'mistral-saba-2502'
| 'codestral'
| 'codestral-2501'
| 'pixtral-large'
| 'pixtral-large-2411'
| 'open-mistral-nemo'
| 'open-mistral-nemo-2407'
| 'mixtral-8x7b-instruct'
| 'llama-3-70b-instruct'
| 'llama-3-8b-instruct'
| 'llama-3.1-70b-instruct'
| 'llama-3.1-8b-instruct'
| 'llama-3.1-405b-instruct'
| 'llama-3.2-1b-instruct'
| 'llama-3.2-3b-instruct'
| 'llama-3.2-11b-vision-instruct'
| 'llama-3.2-90b-vision-instruct'
| 'llama-3.3-70b-instruct'
| 'llama-4-scout-17b-16e-instruct'
| 'llama-4-maverick-17b-128e-instruct'
| 'llama-guard-4-12b'
| 'grok-3-beta'
| 'grok-3-mini-beta'
| 'grok-2'
| 'grok-2-1212'
| 'grok-2-vision'
| 'grok-2-vision-1212'
| 'grok-vision-beta'
| 'grok-beta'
| 'sonar-reasoning-pro'
| 'sonar-reasoning'
| 'sonar-pro'
| 'sonar'
| 'sonar-deep-research'
| 'mythomax-l2-13b'
| 'wizardlm-2-8x22b'
| 'qwen-turbo'
| 'qwen-max'
| 'qwen-2.5-72b-instruct'
| 'qwen3-14b'
| 'qwen3-32b'
| 'qwen3-30b-a3b'
| 'qwen3-235b-a22b'
| 'phi-4'
| 'phi-4-reasoning'
| 'phi-4-reasoning-plus'
| 'phi-4-multimodal-instruct'
| 'gemma-3-27b-it'
| 'gemini-1.5-pro'
| 'gemini-1.5-pro-002'
| 'gemini-1.5-flash'
| 'gemini-1.5-flash-002'
| 'gemini-2.0-flash'
| 'gemini-2.0-flash-001'
| 'gemini-2.0-flash-lite'
| 'gemini-2.0-flash-lite-001'
| 'gemini-2.0-flash-thinking-exp'
| 'gemini-2.0-flash-thinking-exp-01-21'
| 'gemini-2.5-pro-preview'
| 'gemini-2.5-pro-preview-05-06'
| 'gemini-2.5-pro-preview-03-25'
| 'gemini-2.5-flash-preview'
| 'gemini-2.5-flash-preview-04-17'
| 'command-a'
| 'command-a-03-2025'
| 'command-r-plus'
| 'command-r'
| 'qwq-32b'
| 'qwq-32b-preview'
| 'codex-mini'
| 'learnlm-1.5-pro-experimental'
| 'chatgpt-4o-latest'
| 'gpt-4o-search-preview'
| 'gpt-4o-search-preview-2025-03-11'
;

export type TotalTokenUsed = {
  [model in ModelOptions]?: {
    promptTokens: number;
    completionTokens: number;
  };
};
export interface LocalStorageInterfaceV0ToV1 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  theme: Theme;
}

export interface LocalStorageInterfaceV1ToV2 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
}

export interface LocalStorageInterfaceV2ToV3 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
}
export interface LocalStorageInterfaceV3ToV4 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV4ToV5 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV5ToV6 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV6ToV7 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiFree?: boolean;
  apiKey: string;
  apiEndpoint: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
  defaultChatConfig: ConfigInterface;
  defaultSystemMessage: string;
  hideMenuOptions: boolean;
  firstVisit: boolean;
  hideSideMenu: boolean;
}

export interface LocalStorageInterfaceV7oV8
  extends LocalStorageInterfaceV6ToV7 {
  foldersName: string[];
  foldersExpanded: boolean[];
  folders: FolderCollection;
}