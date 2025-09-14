const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                return;
            }

            const li = document.createElement('li');
            li.className = 'task-item flex items-center justify-between bg-purple-50 p-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md';

            const span = document.createElement('span');
            span.textContent = taskText;
            span.className = 'flex-grow cursor-pointer text-gray-800';
            span.onclick = function() {
                li.classList.toggle('completed');
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
            deleteBtn.className = 'ml-4 text-gray-400 hover:text-red-500 transition-colors focus:outline-none';
            deleteBtn.onclick = function() {
                li.classList.add('opacity-0', 'translate-x-4');
                setTimeout(() => {
                    li.remove();
                }, 300);
            };
            
            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
            taskInput.focus();
        }

        addTaskBtn.addEventListener('click', addTask);

        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });