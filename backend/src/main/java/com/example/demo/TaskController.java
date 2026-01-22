package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {

    private final TaskRepository repo;

    public TaskController(TaskRepository repo) {
        this.repo = repo;
    }

   
    @GetMapping
    public List<Task> getAll() {
        return repo.findAll();
    }

    
    @PostMapping
    public Task create(@RequestBody Task task) {
        return repo.save(task);
    }

    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }

   
    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id); // ensure the ID matches
        return repo.save(task);
    }
}