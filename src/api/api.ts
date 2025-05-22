import { ShareGPTSubmitBodyInterface } from '@type/api';
import { ConfigInterface, MessageInterface, ModelOptions } from '@type/chat';
import { isAzureEndpoint } from '@utils/api';

export const getChatCompletion = async (
  endpoint: string,
  messages: MessageInterface[],
  config: ConfigInterface,
  apiKey?: string,
  customHeaders?: Record<string, string>
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  if (isAzureEndpoint(endpoint) && apiKey) {
    headers['api-key'] = apiKey;

    const modelmapping: Partial<Record<ModelOptions, string>> = {
      'gpt-4.1': 'gpt-4.1',
      'gpt-4.1-2025-04-14': 'gpt-4.1-2025-04-14',
      'gpt-4.1-mini': 'gpt-4.1-mini',
      'gpt-4.1-mini-2025-04-14': 'gpt-4.1-mini-2025-04-14',
      'gpt-4.1-nano': 'gpt-4.1-nano',
      'gpt-4.1-nano-2025-04-14': 'gpt-4.1-nano-2025-04-14',
      'gpt-4.5-preview': 'gpt-4.5-preview',
      'gpt-4.5-preview-2025-02-27': 'gpt-4.5-preview-2025-02-27',
      'gpt-4o': 'gpt-4o',
      'gpt-4o-2024-11-20': 'gpt-4o-2024-11-20',
      'gpt-4o-2024-08-06': 'gpt-4o-2024-08-06',
      'gpt-4o-2024-05-13': 'gpt-4o-2024-05-13',
      'gpt-4o-mini': 'gpt-4o-mini',
      'gpt-4o-mini-2024-07-18': 'gpt-4o-mini-2024-07-18',
      'gpt-4-turbo': 'gpt-4-turbo',
      'gpt-4-turbo-2024-04-09': 'gpt-4-turbo-2024-04-09',
      'gpt-4-0125-preview': 'gpt-4-0125-preview',
      'gpt-4-1106-preview': 'gpt-4-1106-preview',
      'gpt-4': 'gpt-4',
      'gpt-4-0613': 'gpt-4-0613',
      'gpt-3.5-turbo': 'gpt-3.5-turbo',
      'o1': 'o1',
      'o1-2024-12-17': 'o1-2024-12-17',
      'o1-preview': 'o1-preview',
      'o1-preview-2024-09-12': 'o1-preview-2024-09-12',
      'o1-mini': 'o1-mini',
      'o1-mini-2024-09-12': 'o1-mini-2024-09-12',
      'o3': 'o3',
      'o3-2025-04-16': 'o3-2025-04-16',
      'o3-mini': 'o3-mini',
      'o3-mini-2025-01-31': 'o3-mini-2025-01-31',
      'o4-mini': 'o4-mini',
      'o4-mini-2025-04-16': 'o4-mini-2025-04-16',
      'deepseek-chat': 'deepseek-chat',
      'deepseek-reasoner': 'deepseek-reasoner',
      'deepseek-prover-v2': 'deepseek-prover-v2',
      'claude-opus-4' : 'claude-opus-4',
      'claude-3.7-sonnet': 'claude-3.7-sonnet',
      'claude-3.7-sonnet-20250219': 'claude-3.7-sonnet-20250219',
      'claude-3.5-sonnet': 'claude-3.5-sonnet',
      'claude-3.5-sonnet-20241022': 'claude-3.5-sonnet-20241022',
      'claude-3.5-haiku': 'claude-3.5-haiku',
      'claude-3.5-haiku-20241022': 'claude-3.5-haiku-20241022',
      'claude-3-opus': 'claude-3-opus',
      'claude-3-opus-20240229': 'claude-3-opus-20240229',
      'claude-3-sonnet': 'claude-3-sonnet',
      'claude-3-sonnet-20240229': 'claude-3-sonnet-20240229',
      'claude-3-haiku': 'claude-3-haiku',
      'claude-3-haiku-20240307': 'claude-3-haiku-20240307',
      'mistral-large': 'mistral-large',
      'mistral-large-2411': 'mistral-large-2411',
      'mistral-medium': 'mistral-medium',
      'mistral-medium-2505': 'mistral-medium-2505',
      'mistral-small': 'mistral-small',
      'mistral-small-2503': 'mistral-small-2503',
      'mistral-small-2501': 'mistral-small-2501',
      'mistral-saba': 'mistral-saba',
      'mistral-saba-2502': 'mistral-saba-2502',
      'codestral': 'codestral',
      'codestral-2501': 'codestral-2501',
      'pixtral-large': 'pixtral-large',
      'pixtral-large-2411': 'pixtral-large-2411',
      'open-mistral-nemo': 'open-mistral-nemo',
      'open-mistral-nemo-2407': 'open-mistral-nemo-2407',
      'mixtral-8x7b-instruct': 'mixtral-8x7b-instruct',
      'llama-3-70b-instruct': 'llama-3-70b-instruct',
      'llama-3-8b-instruct': 'llama-3-8b-instruct',
      'llama-3.1-70b-instruct': 'llama-3.1-70b-instruct',
      'llama-3.1-8b-instruct': 'llama-3.1-8b-instruct',
      'llama-3.1-405b-instruct': 'llama-3.1-405b-instruct',
      'llama-3.2-1b-instruct': 'llama-3.2-1b-instruct',
      'llama-3.2-3b-instruct': 'llama-3.2-3b-instruct',
      'llama-3.2-11b-vision-instruct': 'llama-3.2-11b-vision-instruct',
      'llama-3.2-90b-vision-instruct': 'llama-3.2-90b-vision-instruct',
      'llama-3.3-70b-instruct': 'llama-3.3-70b-instruct',
      'llama-4-scout-17b-16e-instruct': 'llama-4-scout-17b-16e-instruct',
      'llama-4-maverick-17b-128e-instruct': 'llama-4-maverick-17b-128e-instruct',
      'llama-guard-4-12b': 'llama-guard-4-12b',
      'grok-3-beta': 'grok-3-beta',
      'grok-3-mini-beta': 'grok-3-mini-beta',
      'grok-2': 'grok-2',
      'grok-2-1212': 'grok-2-1212',
      'grok-2-vision': 'grok-2-vision',
      'grok-2-vision-1212': 'grok-2-vision-1212',
      'grok-vision-beta': 'grok-vision-beta',
      'grok-beta': 'grok-beta',
      'sonar-reasoning-pro': 'sonar-reasoning-pro',
      'sonar-reasoning': 'sonar-reasoning',
      'sonar-pro': 'sonar-pro',
      'sonar': 'sonar',
      'sonar-deep-research': 'sonar-deep-research',
      'mythomax-l2-13b': 'mythomax-l2-13b',
      'wizardlm-2-8x22b': 'wizardlm-2-8x22b',
      'qwen-turbo': 'qwen-turbo',
      'qwen-max': 'qwen-max',
      'qwen-2.5-72b-instruct': 'qwen-2.5-72b-instruct',
      'qwen3-14b': 'qwen3-14b',
      'qwen3-32b': 'qwen3-32b',
      'qwen3-30b-a3b': 'qwen3-30b-a3b',
      'qwen3-235b-a22b': 'qwen3-235b-a22b',
      'phi-4': 'phi-4',
      'phi-4-reasoning': 'phi-4-reasoning',
      'phi-4-reasoning-plus': 'phi-4-reasoning-plus',
      'phi-4-multimodal-instruct': 'phi-4-multimodal-instruct',
      'gemma-3-27b-it': 'gemma-3-27b-it',
      'gemini-1.5-pro': 'gemini-1.5-pro',
      'gemini-1.5-pro-002': 'gemini-1.5-pro-002',
      'gemini-1.5-flash': 'gemini-1.5-flash',
      'gemini-1.5-flash-002': 'gemini-1.5-flash-002',
      'gemini-2.0-flash': 'gemini-2.0-flash',
      'gemini-2.0-flash-001': 'gemini-2.0-flash-001',
      'gemini-2.0-flash-lite': 'gemini-2.0-flash-lite',
      'gemini-2.0-flash-lite-001': 'gemini-2.0-flash-lite-001',
      'gemini-2.0-flash-thinking-exp': 'gemini-2.0-flash-thinking-exp',
      'gemini-2.0-flash-thinking-exp-01-21': 'gemini-2.0-flash-thinking-exp-01-21',
      'gemini-2.5-pro-preview': 'gemini-2.5-pro-preview',
      'gemini-2.5-pro-preview-05-06': 'gemini-2.5-pro-preview-05-06',
      'gemini-2.5-pro-preview-03-25': 'gemini-2.5-pro-preview-03-25',
      'gemini-2.5-flash-preview': 'gemini-2.5-flash-preview',
      'gemini-2.5-flash-preview-04-17': 'gemini-2.5-flash-preview-04-17',
      'gemini-2.5-flash-preview-05-20': 'gemini-2.5-flash-preview-05-20',
      'command-a': 'command-a',
      'command-a-03-2025': 'command-a-03-2025',
      'command-r-plus': 'command-r-plus',
      'command-r': 'command-r',
      'qwq-32b': 'qwq-32b',
      'qwq-32b-preview': 'qwq-32b-preview',
      'codex-mini': 'codex-mini',
      'learnlm-1.5-pro-experimental': 'learnlm-1.5-pro-experimental',
      'chatgpt-4o-latest': 'chatgpt-4o-latest',
      'gpt-4o-search-preview': 'gpt-4o-search-preview',
      'gpt-4o-search-preview-2025-03-11':'gpt-4o-search-preview-2025-03-11'
    };

    const model = modelmapping[config.model] || config.model;

    // set api version to 2023-07-01-preview for gpt-4 and gpt-4-32k, otherwise use 2023-03-15-preview
    const apiVersion = '2023-07-01-preview';

    const path = `openai/deployments/${model}/chat/completions?api-version=${apiVersion}`;

    if (!endpoint.endsWith(path)) {
      if (!endpoint.endsWith('/')) {
        endpoint += '/';
      }
      endpoint += path;
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      messages,
      ...config,
      max_tokens: undefined,
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();
  return data;
};

export const getChatCompletionStream = async (
  endpoint: string,
  messages: MessageInterface[],
  config: ConfigInterface,
  apiKey?: string,
  customHeaders?: Record<string, string>
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  if (isAzureEndpoint(endpoint) && apiKey) {
    headers['api-key'] = apiKey;

    const modelmapping: Partial<Record<ModelOptions, string>> = {
      'gpt-4o': 'gpt-4o',
      'gpt-4-turbo': 'gpt-4-turbo',
      'gpt-3.5-turbo': 'gpt-3.5-turbo',
    };

    const model = modelmapping[config.model] || config.model;

    // set api version to 2023-07-01-preview for gpt-4 and gpt-4-32k, otherwise use 2023-03-15-preview
    const apiVersion = '2023-07-01-preview';
    const path = `openai/deployments/${model}/chat/completions?api-version=${apiVersion}`;

    if (!endpoint.endsWith(path)) {
      if (!endpoint.endsWith('/')) {
        endpoint += '/';
      }
      endpoint += path;
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      messages,
      ...config,
      max_tokens: undefined,
      stream: true,
    }),
  });
  if (response.status === 404 || response.status === 405) {
    const text = await response.text();
    if (text.includes('model_not_found')) {
      throw new Error(
        text +
          '\nMessage from rootGPT:\nPlease ensure that you have access to the Naga API!'
      );
    } else {
      throw new Error(
        'Message from rootGPT:\nInvalid API endpoint! We recommend you to check your free API endpoint.'
      );
    }
  }

  if (response.status === 429 || !response.ok) {
    const text = await response.text();
    let error = text;
    if (text.includes('insufficient_quota')) {
      error +=
        '\nMessage from rootGPT:\nWe recommend changing your API endpoint or API key';
    } else if (response.status === 429) {
      error += '\nRate limited!';
    }
    throw new Error(error);
  }

  const stream = response.body;
  return stream;
};

export const submitShareGPT = async (body: ShareGPTSubmitBodyInterface) => {
  const request = await fetch('https://sharegpt.com/api/conversations', {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const response = await request.json();
  const { id } = response;
  const url = `https://shareg.pt/${id}`;
  window.open(url, '_blank');
};
