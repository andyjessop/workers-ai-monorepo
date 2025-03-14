import type { PromptChainingWorkflowParams } from "../prompt-chaining-workflow.ts";

export interface Env {
	ENVIRONMENT: "production" | "development" | "staging";
	OPENAI_API_KEY: string;
	AI: Ai;
	PROMPT_CHAINING_WORKFLOW: Workflow<PromptChainingWorkflowParams>;
}
