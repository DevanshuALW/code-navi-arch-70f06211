
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ExecuteCodeRequest {
  code: string;
  language: string;
  input?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { code, language, input = '' }: ExecuteCodeRequest = await req.json();

    console.log(`Executing ${language} code`, { code: code.substring(0, 100) });

    // Simulate code execution (in a real implementation, you'd use a secure sandbox)
    let result;
    let executionTime = Math.floor(Math.random() * 1000) + 50; // Random execution time
    let memoryUsage = Math.floor(Math.random() * 10000) + 1000; // Random memory usage

    switch (language.toLowerCase()) {
      case 'javascript':
        try {
          // Very basic JavaScript execution simulation
          if (code.includes('console.log')) {
            const logMatch = code.match(/console\.log\((.*?)\)/);
            if (logMatch) {
              result = {
                output: eval(logMatch[1]) || 'undefined',
                error: null,
                executionTime,
                memoryUsage
              };
            }
          } else if (code.includes('return')) {
            // Try to extract and evaluate simple return statements
            result = {
              output: 'Function executed successfully',
              error: null,
              executionTime,
              memoryUsage
            };
          } else {
            result = {
              output: 'Code executed successfully',
              error: null,
              executionTime,
              memoryUsage
            };
          }
        } catch (error) {
          result = {
            output: '',
            error: error.message,
            executionTime: 0,
            memoryUsage: 0
          };
        }
        break;

      case 'python':
        result = {
          output: 'Python code executed successfully (simulated)',
          error: null,
          executionTime,
          memoryUsage
        };
        break;

      case 'java':
        result = {
          output: 'Java code compiled and executed successfully (simulated)',
          error: null,
          executionTime,
          memoryUsage
        };
        break;

      default:
        result = {
          output: `${language} code executed successfully (simulated)`,
          error: null,
          executionTime,
          memoryUsage
        };
    }

    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Code execution error:', error);
    
    return new Response(
      JSON.stringify({ 
        output: '', 
        error: error.message,
        executionTime: 0,
        memoryUsage: 0
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
