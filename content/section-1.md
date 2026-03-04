# 1. Fundamentals of LLMs & AI

## Chapter 1.1: Introduction to Large Language Models

### What are LLMs?

Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data. They can understand and generate human-like text, making them powerful tools for various applications.

### History and Evolution

- **Early NLP:** Rule-based systems and statistical models
- **Word Embeddings:** Word2Vec, GloVe (2013-2014)
- **RNN Era:** LSTM and GRU models
- **Transformer Revolution:** Attention mechanism (2017)
- **Modern LLMs:** GPT, BERT, and beyond (2018-present)

### Key Characteristics

- Billions of parameters
- Trained on diverse internet text
- Zero-shot and few-shot learning capabilities
- Context understanding and generation

---

## Chapter 1.2: Core Architecture and Concepts

### The Transformer Architecture

**Components:**
- **Self-Attention Mechanism:** Allows model to weigh importance of different words
- **Multi-Head Attention:** Multiple attention mechanisms working in parallel
- **Feed-Forward Networks:** Process attention outputs
- **Positional Encoding:** Adds sequence order information

### Attention Mechanism

The attention mechanism helps models focus on relevant parts of the input:
- **Query, Key, Value:** Three vectors that compute attention
- **Scaled Dot-Product:** Calculates attention scores
- **Softmax:** Normalizes attention weights

### Training Paradigms

#### Pre-training
- Trained on massive datasets (web text, books, code)
- Self-supervised learning (predict next token)
- Learn general language understanding

#### Fine-tuning
- Adapt pre-trained model to specific tasks
- Smaller, task-specific datasets
- Supervised learning with labeled data

### Tokenization

**What is it?**
Breaking text into processable units (tokens)

**Methods:**
- **Word-level:** Each word is a token
- **Character-level:** Each character is a token
- **Subword:** BPE, WordPiece, SentencePiece (most common)

**Example:**
```
Text: "Machine learning"
Tokens: ["Machine", "learning"] or ["Mach", "ine", "learn", "ing"]
```

---

## Chapter 1.3: Popular LLM Models

### GPT Family (OpenAI)

- **GPT-3:** 175B parameters, versatile text generation
- **GPT-4:** Multimodal, improved reasoning
- **ChatGPT:** Conversational interface
- Use cases: Content creation, coding, analysis

### BERT Family (Google)

- **BERT:** Bidirectional encoder for understanding
- **RoBERTa:** Optimized BERT training
- **ALBERT:** Lighter version of BERT
- Use cases: Search, classification, Q&A

### Claude (Anthropic)

- Focus on safety and helpfulness
- Constitutional AI training
- Long context windows (100K+ tokens)

### Gemini (Google DeepMind)

- Multimodal from the ground up
- Text, image, audio, video understanding
- Advanced reasoning capabilities

### LLaMA (Meta)

- Open-source models
- Efficient training and inference
- Community-driven fine-tunes

### Other Notable Models

- **Mistral:** Efficient open-source alternatives
- **Cohere:** Enterprise-focused APIs
- **PaLM:** Google's pathways language model
