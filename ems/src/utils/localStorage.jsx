const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete onboarding",
        description: "Complete the onboarding process by submitting all required documents.",
        date: "2025-01-20",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend team meeting",
        description: "Participate in the weekly team meeting to discuss project updates.",
        date: "2025-01-18",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit project report",
        description: "Submit the completed project report for Q4.",
        date: "2025-01-15",
        category: "Work"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Prepare a presentation for the upcoming client meeting.",
        date: "2025-01-21",
        category: "Client Work"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update profile",
        description: "Update your employee profile in the system.",
        date: "2025-01-19",
        category: "HR"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Debug application",
        description: "Identify and resolve bugs in the application module.",
        date: "2025-01-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write test cases",
        description: "Write unit test cases for the new features.",
        date: "2025-01-18",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix critical bug",
        description: "Fix the critical bug reported by QA in the production environment.",
        date: "2025-01-15",
        category: "Critical"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research market trends",
        description: "Conduct research on market trends for the upcoming quarter.",
        date: "2025-01-22",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit expense report",
        description: "Submit the expense report for the last business trip.",
        date: "2025-01-14",
        category: "Finance"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Sanjay",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Plan team outing",
        description: "Organize a team outing for this quarter.",
        date: "2025-01-25",
        category: "Team Building"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create user documentation",
        description: "Write user documentation for the new software release.",
        date: "2025-01-17",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix server issue",
        description: "Investigate and fix the server downtime issue.",
        date: "2025-01-12",
        category: "IT Support"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123"
  }
];

  
//   const admin = [
//     {
//       id: 1,
//       email: "admin@example.com",
//       password: "123"
//     }
// ];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(employees, admin)
    return {employees, admin}
}
// export { employee, admin };
