package com.devlog.api.domain;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.UUID;

@Entity @Table(name="work_items")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class WorkItem {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne @JoinColumn(name = "log_entry_id")
    @JsonIgnoreProperties("workItems")
    private LogEntry logEntry;

    @ManyToOne @JoinColumn(name = "project_id")
    private Project project;

    private String title;
    private Integer durationMinutes;
}
