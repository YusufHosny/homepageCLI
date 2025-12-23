export type Submission = {
  id: string;
  studentName: string;
  assignmentTitle: string;
  currentState: {
    text: string;
    isTyping: boolean;
    lastUpdated: string; // ISO date string
    timeSinceStartedSeconds: number;
    idleTimeSeconds: number;
  };
  chatHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: string; // ISO date string
  }>;
};


export const data: Submission[] = [
  {
    "id": "7b2e9a1c-fd34-4e81-9b1a-294d1f50a2c3",
    "studentName": "Jordan Miller",
    "assignmentTitle": "Socio-Economic Impacts of the Industrial Revolution",
    "currentState": {
      "text": "The Industrial Revolution marked a major turning point in history. Before this, most people lived in rural areas and worked in agriculture. But then factories started popping up in cities, and everyone moved there for work. This led to urbanization, which had a lot of effects on how families lived. \n\nOne big change was the shift from hand production to machines. This made things cheaper but also made factory work very dangerous. Many workers, including children, had to work long hours in bad conditions. While the middle class grew and some people got very wealthy, the working class struggled significantly. I've looked at the data on GDP growth during the 19th century, and it clearly shows an upward trend, but that doesn't tell the whole story of the human cost. \n\nSo, looking at all of this, it's clear that the revolution was both good and bad. It created the modern world we live in today, with all our technology and stuff. But the transition period was really rough for the average person living through it.",
      "isTyping": false,
      "lastUpdated": "2025-12-23T14:42:10Z",
      "timeSinceStartedSeconds": 3420,
      "idleTimeSeconds": 215
    },
    "chatHistory": [
      {
        "role": "user",
        "content": "I'm starting the part about factory conditions. Should I mention the Luddites?",
        "timestamp": "2025-12-23T14:05:22Z"
      },
      {
        "role": "assistant",
        "content": "Mentioning the Luddites is a great way to show resistance to industrialization. You could focus on how they feared technology would replace their skilled labor.",
        "timestamp": "2025-12-23T14:06:05Z"
      },
      {
        "role": "user",
        "content": "I finished the section on the middle class and the working class. I think I have enough facts now. I'm trying to wrap this up but I'm kind of stuck.",
        "timestamp": "2025-12-23T14:30:15Z"
      },
      {
        "role": "assistant",
        "content": "It sounds like you have a solid foundation. Are you ready to move into your conclusion, or do you want to add more specific examples first?",
        "timestamp": "2025-12-23T14:35:45Z"
      },
      {
        "role": "assistant",
        "content": "Remember to tie your conclusion back to your thesis statement. Summarize the key points about both the positive and negative impacts of the Industrial Revolution, and perhaps reflect on how those historical changes still influence our society today.",
        "timestamp": "2025-12-23T14:41:45Z"
      },
    ]
  },
  {
    "id": "e4b2d1a8-9c4f-4a77-b12d-63f82190e3c5-v1",
    "studentName": "Marcus Thorne",
    "assignmentTitle": "The Impact of Renewable Energy on Global Economics",
    "currentState": {
      "text": "The shift towards renewable energy is not just a enviromental issue but a massive economic transformation. For decades, the global economy has been relyant on fossil fuels, creating a rigid power structure. However, solar and wind technollogy is becoming much cheaper then coal. This change is causing a lot of disruption in traditional markets. \n\nMany countrys in the global south have an advantage because they have lots of sunlight. This could lead to a 'green rush' where investement flows into",
      "isTyping": true,
      "lastUpdated": "2025-12-23T14:25:30Z",
      "timeSinceStartedSeconds": 1530,
      "idleTimeSeconds": 2
    },
    "chatHistory": [
      {
        "role": "user",
        "content": "I need some ideas for the economic benefits of solar energy for developing nations.",
        "timestamp": "2025-12-23T14:10:00Z"
      },
      {
        "role": "assistant",
        "content": "Focus on 'energy sovereignty.' Developing nations can reduce reliance on expensive fuel imports and utilize natural sunlight to power local industries. Check out the term 'leapfrogging' in economic development.",
        "timestamp": "2025-12-23T14:11:15Z"
      }
    ]
  },
  {
    "id": "e4b2d1a8-9c4f-4a77-b12d-63f82190e3c5-v2",
    "studentName": "Marcus Thorne",
    "assignmentTitle": "The Impact of Renewable Energy on Global Economics",
    "currentState": {
      "text": "The shift towards renewable energy is not just a enviromental issue but a massive economic transformation. For decades, the global economy has been relyant on fossil fuels, creating a rigid power structure. However, solar and wind technollogy is becoming much cheaper then coal. This change is causing a lot of disruption in traditional markets. \n\nMany countrys in the global south have an advantage because they have lots of sunlight. This could lead to a 'green rush' where investement flows into these regions. But there are still big problems with energy storage and grid stabillity. Without better batterys, the transition will be slow. If we look at the data, we can see that jobs in green energy are growing faster than any other sector. Even though some people loose jobs in oil, more jobs are being created in the long run. \n\nIn conclution, the economic benifits of switching to clean energy far outway the costs. Its inevitable that we move away from oil.",
      "isTyping": true,
      "lastUpdated": "2025-12-23T15:15:10Z",
      "timeSinceStartedSeconds": 4510,
      "idleTimeSeconds": 5
    },
    "chatHistory": [
      {
        "role": "user",
        "content": "I need some ideas for the economic benefits of solar energy for developing nations.",
        "timestamp": "2025-12-23T14:10:00Z"
      },
      {
        "role": "assistant",
        "content": "Focus on 'energy sovereignty.' Developing nations can reduce reliance on expensive fuel imports and utilize natural sunlight to power local industries. Check out the term 'leapfrogging' in economic development.",
        "timestamp": "2025-12-23T14:11:15Z"
      },
      {
        "role": "user",
        "content": "That leapfrogging idea is good. Can you help me phrase the part about job creation vs job loss in the oil industry?",
        "timestamp": "2025-12-23T14:45:20Z"
      },
      {
        "role": "assistant",
        "content": "You could frame it as a 'Just Transition.' While the fossil fuel sector contracts, the renewable sector creates a more diverse array of manufacturing and maintenance jobs. Try to emphasize the net gain in employment.",
        "timestamp": "2025-12-23T14:46:50Z"
      }
    ]
  },
  {
    "id": "e4b2d1a8-9c4f-4a77-b12d-63f82190e3c5",
    "studentName": "Marcus Thorne",
    "assignmentTitle": "The Impact of Renewable Energy on Global Economics",
    "currentState": {
      "text": "The shift towards renewable energy is not just a enviromental issue but a massive economic transformation. For decades, the global economy has been relyant on fossil fuels, creating a rigid power structure. However, solar and wind technollogy is becoming much cheaper then coal. This change is causing a lot of disruption in traditional markets. \n\nMany countrys in the global south have an advantage because they have lots of sunlight. This could lead to a 'green rush' where investement flows into these regions. But there are still big problems with energy storage and grid stabillity. Without better batterys, the transition will be slow. If we look at the data, we can see that jobs in green energy are growing faster than any other sector. Even though some people loose jobs in oil, more jobs are being created in the long run. \n\nIn conclution, the economic benifits of switching to clean energy far outway the costs. Its inevitable that we move away from oil. The future of the world depends on how fast we can make this shift happen without causing too much financial chaoes.",
      "isTyping": false,
      "lastUpdated": "2025-12-23T15:30:45Z",
      "timeSinceStartedSeconds": 5400,
      "idleTimeSeconds": 320
    },
    "chatHistory": [
      {
        "role": "user",
        "content": "I need some ideas for the economic benefits of solar energy for developing nations.",
        "timestamp": "2025-12-23T14:10:00Z"
      },
      {
        "role": "assistant",
        "content": "Focus on 'energy sovereignty.' Developing nations can reduce reliance on expensive fuel imports and utilize natural sunlight to power local industries. Check out the term 'leapfrogging' in economic development.",
        "timestamp": "2025-12-23T14:11:15Z"
      },
      {
        "role": "user",
        "content": "That leapfrogging idea is good. Can you help me phrase the part about job creation vs job loss in the oil industry?",
        "timestamp": "2025-12-23T14:45:20Z"
      },
      {
        "role": "assistant",
        "content": "You could frame it as a 'Just Transition.' While the fossil fuel sector contracts, the renewable sector creates a more diverse array of manufacturing and maintenance jobs. Try to emphasize the net gain in employment.",
        "timestamp": "2025-12-23T14:46:50Z"
      },
    ]
  },
  {
    "id": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
    "studentName": "Sarah Jenkins",
    "assignmentTitle": "The Impact of the Printing Press on European Literacy",
    "currentState": {
      "text": "",
      "isTyping": false,
      "lastUpdated": "2025-12-23T16:45:00Z",
      "timeSinceStartedSeconds": 120,
      "idleTimeSeconds": 120
    },
    "chatHistory": []
  },
  {
    "id": "f8c3e1b2-72a1-4d3e-90f5-c8b6a1234567",
    "studentName": "Leo Santigo",
    "assignmentTitle": "Analysis of Shakespearean Motifs in 'Macbeth'",
    "currentState": {
      "text": "",
      "isTyping": false,
      "lastUpdated": "2025-12-23T16:15:00Z",
      "timeSinceStartedSeconds": 600,
      "idleTimeSeconds": 300
    },
    "chatHistory": [
      {
        "role": "user",
        "content": "hey i missed the last class. what are we supposed to be doing for this macbeth essay?",
        "timestamp": "2025-12-23T16:06:10Z"
      },
      {
        "role": "assistant",
        "content": "This assignment asks you to identify a recurring motif in 'Macbeth'—like blood, sleep, or nature—and explain how it reflects the changing mental state of the main characters. Have you picked a motif yet?",
        "timestamp": "2025-12-23T16:06:45Z"
      },
      {
        "role": "user",
        "content": "i dont know. can u just give me a list of all the times blood is mentioned and tell me what they mean so i can start?",
        "timestamp": "2025-12-23T16:10:20Z"
      },
      {
        "role": "assistant",
        "content": "I can certainly help you brainstorm! Instead of a list, let's look at one specific scene. Remember the 'Out, damned spot!' scene with Lady Macbeth? Why do you think she is 'seeing' blood there even though she isn't actually bleeding?",
        "timestamp": "2025-12-23T16:11:05Z"
      },
    ]
  }
]