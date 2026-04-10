package com.devlog.api.controller;

import com.devlog.api.domain.Project;
import com.devlog.api.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/projects")
@RequiredArgsConstructor @CrossOrigin("*")
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping
    public ResponseEntity<List<Project>>  getAll(){
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @PostMapping
    public ResponseEntity<Project> create(@RequestBody Project project){
        return ResponseEntity.ok(projectService.saveProject(project));
    }
}
