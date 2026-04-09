package com.devlog.api.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.*;

@Entity @Table(name = "log_entries")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class LogEntry {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true, nullable = false)
    private LocalDate logDate;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @OneToMany(mappedBy = "logEntry", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WorkItem> workItems = new ArrayList<>();
}
