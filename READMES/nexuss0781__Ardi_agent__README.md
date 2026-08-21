# Ardi_agent

| Repository metadata | Details |
|---|---|
| Repository | [nexuss0781/Ardi_agent](https://github.com/nexuss0781/Ardi_agent) |
| Visibility | Public |
| Fork | No |
| Archived | No |
| Default branch | `main` |
| Primary language | JavaScript |
| Topics | None listed |
| Repository description | Not provided |

---
## Ardi Agent: An Autonomous AI Development System


Ardi Agent is an advanced Agentic AI system designed to streamline the development lifecycle of web applications, from initial concept to implementation and testing. It leverages a multi-agent architecture to autonomously handle tasks across backend, frontend, and full-stack development.

## ✨ Key Features

*   **Autonomous Workflow Orchestration:** A central orchestrator dynamically manages the flow between specialized AI agents, ensuring a clear and efficient development path.
*   **Gemini 2.5 Flash Integration:** Utilizes Google's powerful Gemini 2.5 Flash model for all Large Language Model (LLM) interactions, providing consistent and high-quality AI capabilities.
*   **Comprehensive Session History:** Tracks all LLM interactions and agent actions, enabling context-aware operations, task resumption, and detailed post-mortem analysis.
*   **Robust Agent Implementations:** Features enhanced `ClarificationAgent`, `DebuggingAgent`, and `QualityAssuranceAgent` for more reliable and actionable insights.
*   **Centralized Configuration:** Securely manages API keys and other sensitive information via a `.env` file.

## 🚀 How It Works

Ardi Agent operates through a series of interconnected phases, each driven by a team of specialized AI agents. The workflow is orchestrated to ensure a logical progression from understanding a user's query to delivering a comprehensive development plan and simulated implementation.

### Phase 1: Query Processing & Planning
This phase focuses on deeply understanding the user's request and formulating a detailed development roadmap.

*   **Language Expert:** Refines and formalizes the initial user query.
*   **Clarification Agent:** Identifies and seeks clarification on ambiguous or missing objectives, ensuring a solid foundation for development.
*   **Idea Generator:** Brainstorms and outlines comprehensive feature sets for the application.
*   **Analysis Agent:** Conducts simulated market research, trend analysis, and competitor assessment to inform feature development.
*   **Synthesizer Agent:** Integrates ideas and analysis into a cohesive, structured document.
*   **Quality Assurance Agent:** Reviews content at critical junctures, providing feedback for refinement.
*   **Report Agent:** Generates a detailed pre-implementation roadmap.
*   **Organizer Agent:** Structures and beautifies generated content for clarity and readability.
*   **Presenter Agent:** Summarizes the completed planning phase and prepares for implementation.

### Phase 2: Implementation & Validation
This phase translates the development plan into a simulated implementation, focusing on backend, frontend, and integration aspects.

*   **Tasker Agent:** Categorizes features into distinct backend and frontend development tasks.
*   **Backend Expert:** Simulates the development of the application's backend components.
*   **Frontend Expert:** Simulates the development of the application's user interface and experience.
*   **Fullstack Expert:** Verifies the integrity and compatibility of the integrated backend and frontend components.
*   **Report Agent:** Generates post-implementation documentation and summaries.
*   **Synthesizer Agent:** Consolidates post-implementation reports and insights.
*   **Organizer Agent:** Formats and beautifies the final documentation.
*   **Debugging Agent:** Identifies and suggests solutions for simulated technical issues.
*   **Presenter Agent:** Delivers a comprehensive overview of the completed implementation phase.

## 📂 Project Structure

```
Ardi_agent/
├── .env                    # Environment variables (e.g., API keys)
├── agents/                 # Contains individual AI agents
│   ├── ...
├── prompts/                # Stores prompts for each agent
│   ├── ...
├── sessions/               # Stores session history and agent actions
│   ├── [timestamp_session_id]/
│   │   ├── history.json
│   │   └── actions.json
├── tools/                  # Various utility tools (e.g., file_manager, internet_tool)
│   ├── ...
├── utils/                  # Utility functions and core components
│   ├── llm_client.py       # Centralized LLM interaction handler
│   ├── rate_limiter.py     # Manages API call rates
│   └── session_manager.py  # Manages session history and action logging
├── deep_analysis.md        # Detailed analysis of the codebase and improvements
├── main.py                 # Entry point for the application
├── orchestrator.py         # Main workflow orchestrator
├── README.md               # This file
├── todo_2.md               # Development roadmap and task tracker
└── ...                     # Other generated output files (analysis.md, idea.md, etc.)
```

## 🛠️ Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nexuss0781/Ardi_agent.git
    cd Ardi_agent
    ```

2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: A `requirements.txt` file is not currently present but should be created to list all Python dependencies like `python-dotenv` and `google-generativeai`.)*

3.  **Configure API Key:**
    Create a `.env` file in the root directory of the project and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    Replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key.

## ▶️ Usage

To run the Ardi Agent, execute the `main.py` script:

```bash
python3.11 main.py
```

The orchestrator will initiate the development workflow based on a predefined initial query. Progress and outputs will be displayed in the terminal, and detailed session history will be saved in the `sessions/` directory.

## 🤝 Contributing

Contributions are highly welcome! Please feel free to fork the repository, implement improvements, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details. (Note: A `LICENSE` file is not currently included in the repository and would need to be added.)
