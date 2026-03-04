# 2. AI Engineer Roadmap

## Chapter 2.1: Foundation Skills

### Programming Languages

#### Python (Essential)
- **Libraries:** NumPy, Pandas, Matplotlib
- **Why:** De facto standard for AI/ML
- **Learn:** Data manipulation, OOP, decorators

#### JavaScript (Recommended)
- **Frameworks:** TensorFlow.js, Node.js
- **Why:** Web-based AI applications
- **Learn:** Async programming, APIs

#### Other Languages
- **C++:** Performance-critical code
- **R:** Statistical analysis
- **Julia:** Scientific computing

### Mathematics Foundation

#### Linear Algebra
- Vectors and matrices
- Matrix operations and decomposition
- Eigenvalues and eigenvectors
- Why: Neural networks are matrix operations

#### Calculus
- Derivatives and gradients
- Chain rule (backpropagation)
- Partial derivatives
- Why: Optimization and training

#### Probability & Statistics
- Probability distributions
- Bayes' theorem
- Hypothesis testing
- Statistical inference
- Why: Model uncertainty and evaluation

### Computer Science Fundamentals

- **Data Structures:** Arrays, trees, graphs, hash tables
- **Algorithms:** Sorting, searching, dynamic programming
- **Complexity:** Big O notation, time/space tradeoffs
- **Why:** Efficient model implementation

---

## Chapter 2.2: Machine Learning Basics

### Learning Paradigms

#### Supervised Learning
- Labeled training data
- Classification (categories)
- Regression (continuous values)
- Examples: Email spam, price prediction

#### Unsupervised Learning
- No labels, find patterns
- Clustering (grouping)
- Dimensionality reduction
- Examples: Customer segmentation, anomaly detection

#### Reinforcement Learning
- Learn through rewards
- Agent, environment, actions
- Examples: Game AI, robotics

### Core ML Algorithms

#### Classic Algorithms
- **Linear Regression:** Predict continuous values
- **Logistic Regression:** Binary classification
- **Decision Trees:** Rule-based decisions
- **Random Forests:** Ensemble of trees
- **SVM:** Support vector machines
- **K-Means:** Clustering algorithm

### Model Evaluation

#### Metrics
- **Accuracy:** Overall correctness
- **Precision/Recall:** Classification quality
- **F1 Score:** Harmonic mean
- **RMSE:** Regression error
- **AUC-ROC:** Classification performance

#### Validation Techniques
- Train/validation/test splits
- Cross-validation
- Overfitting vs underfitting
- Regularization techniques

---

## Chapter 2.3: Deep Learning

### Neural Network Fundamentals

#### Basic Architecture
- **Input Layer:** Receives data
- **Hidden Layers:** Process information
- **Output Layer:** Produces predictions
- **Activation Functions:** ReLU, sigmoid, tanh

#### Training Process
1. **Forward Pass:** Input → prediction
2. **Loss Calculation:** Compare to ground truth
3. **Backpropagation:** Calculate gradients
4. **Weight Update:** Optimize parameters

### Advanced Architectures

#### Convolutional Neural Networks (CNNs)
- **Use:** Computer vision, image processing
- **Concepts:** Convolution, pooling, filters
- **Applications:** Image classification, object detection

#### Recurrent Neural Networks (RNNs)
- **Use:** Sequential data, time series
- **Variants:** LSTM, GRU
- **Applications:** Language modeling, speech recognition

#### Transformers
- **Use:** Modern NLP foundation
- **Key:** Self-attention mechanism
- **Applications:** Language models, translation

### Optimization Techniques

#### Optimizers
- **SGD:** Stochastic gradient descent
- **Adam:** Adaptive learning rates
- **AdamW:** Adam with weight decay

#### Training Tricks
- Learning rate scheduling
- Batch normalization
- Dropout for regularization
- Early stopping
- Data augmentation

---

## Chapter 2.4: LLM Specialization

### Prompt Engineering

#### Techniques
- **Zero-shot:** No examples
- **Few-shot:** Provide examples
- **Chain-of-thought:** Step-by-step reasoning
- **System prompts:** Set behavior

#### Best Practices
- Be specific and clear
- Provide context
- Use delimiters
- Iterate and refine

### Fine-tuning Methods

#### Full Fine-tuning
- Update all model parameters
- Requires significant compute
- Best performance for specific tasks

#### Parameter-Efficient Fine-tuning

**LoRA (Low-Rank Adaptation)**
- Add small trainable matrices
- Freeze base model
- 10-100x fewer parameters

**QLoRA (Quantized LoRA)**
- Combines quantization + LoRA
- Train on consumer GPUs
- Minimal quality loss

**Prefix Tuning**
- Train prompt embeddings
- Keep model frozen

### RAG (Retrieval-Augmented Generation)

#### Architecture
1. **Retrieve:** Find relevant documents
2. **Augment:** Add to prompt context
3. **Generate:** LLM produces answer

#### Components
- **Vector Database:** Pinecone, Weaviate, Chroma
- **Embeddings:** Convert text to vectors
- **Similarity Search:** Find relevant content

#### Use Cases
- Question answering over documents
- Up-to-date information
- Company knowledge bases

### LLM APIs and Integration

#### Major Providers
- **OpenAI API:** GPT models
- **Anthropic:** Claude API
- **Google:** Gemini API
- **Cohere:** Enterprise NLP

#### Integration Skills
- RESTful API calls
- Authentication and rate limits
- Streaming responses
- Error handling
- Cost optimization
