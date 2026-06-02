# Nexus Property and Management System

![Flask](https://img.shields.io/badge/Flask-3.0+-green.svg)
![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0+-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🏗️ Architecture Overview

This project has been refactored from a monolithic codebase into a **modular blueprint architecture**, eliminating circular dependencies and improving maintainability.

```
┌─────────────────────────────────────────────────────────────────┐
│                        Flask Application                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Core BP   │  │   Auth BP   │  │  Student BP │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  Teacher BP │  │  Parent BP  │  │  HR/CEO BP  │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │    Librarian│  │Talent Club  │  │   Chat BP   │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  Tasks BP   │  │ Requests BP │  │  Assets BP  │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  Social BP  │  │Analytics BP │  │Behavior BP  │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Models Layer  │
                    │  (No Cycles!)   │
                    └─────────────────┘
```

## 📁 Project Structure

```
/workspace
├── app.py                      # Main application entry point
├── README.md                   # This file
└── blueprints/                 # Modular blueprint package
    ├── __init__.py             # Blueprint exports
    ├── models.py               # Centralized SQLAlchemy models
    ├── utils.py                # Shared utilities (no circular deps)
    ├── auth.py                 # Authentication & registration
    ├── core.py                 # Home page & global utilities
    ├── student.py              # Student dashboard & features
    ├── teacher.py              # Teacher tools & classroom mgmt
    ├── parent.py               # Parent portal
    ├── hr_ceo.py               # HR & CEO administration
    ├── school_exec.py          # School executive oversight
    ├── government.py           # Government reporting
    ├── system_admin.py         # System administration
    ├── librarian.py            # Library management
    ├── talent_club.py          # Talent club ecosystem
    ├── chat.py                 # Real-time messaging
    ├── notifications.py        # Notification system
    ├── tasks.py                # Task management
    ├── requests.py             # Multi-tier approval requests
    ├── assets.py               # Asset tracking
    ├── library.py              # Student library access
    ├── social.py               # Social media features
    ├── analytics.py            # Data analytics & reports
    ├── behavior.py             # Behavior record management
    ├── attendance.py           # Attendance tracking
    ├── contacts.py             # Contact directory
    └── weather.py              # Weather integration
```

## 🎯 Blueprints Overview

| Blueprint | URL Prefix | Description | Routes |
|-----------|------------|-------------|--------|
| `core` | `/` | Home page, about, terms | 4 |
| `auth` | `/auth` | Login, logout, registration | 6 |
| `student` | `/student` | Student dashboard, marks, behavior | 7 |
| `teacher` | `/teacher` | Classroom, attendance, marks entry | 8 |
| `parent` | `/parent` | Parent portal for children's data | 6 |
| `hr_ceo` | `/hr_ceo` | Asset mgmt, reports, lab assignments | 10 |
| `school_exec` | `/school_exec` | Executive oversight & analytics | 4 |
| `government` | `/government` | Government-level reporting | 3 |
| `system_admin` | `/system_admin` | User & role management | 5 |
| `librarian` | `/librarian` | Library operations & kiosk | 7 |
| `talent_club` | `/talent_club` | Club management, feeds, elections | 12 |
| `chat` | `/chat` | Messaging & contacts | 5 |
| `notifications` | `/notifications` | User notifications | 5 |
| `tasks` | `/tasks` | Task assignment & tracking | 9 |
| `requests` | `/requests` | Multi-tier approval workflow | 7 |
| `assets` | `/assets` | Asset lifecycle management | 6 |
| `library` | `/library` | Student library access | 3 |
| `social` | `/social` | Global posts, comments, likes | 6 |
| `analytics` | `/analytics` | Institutional analytics | 7 |
| `behavior` | `/behavior` | Student behavior records | 4 |
| `attendance` | `/attendance` | Attendance reports | 3 |
| `contacts` | `/contacts` | Directory by section/role | 3 |
| `weather` | `/weather` | Weather information | 3 |

**Total: 23 Blueprints | ~140+ Routes**

## 🔧 Installation

```bash
# Clone the repository
git clone <repository-url>
cd school-management-system

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Initialize database
flask db upgrade

# Run the application
python app.py
```

## 📋 Requirements

- Python 3.9+
- Flask 3.0+
- SQLAlchemy 2.0+
- Flask-Login
- Flask-Session
- Flask-SocketIO
- Werkzeug

## 🔒 Security Features

- Role-Based Access Control (RBAC)
- Password hashing with Werkzeug
- Session management with Flask-Session
- CSRF protection via Flask-WTF
- SQL injection prevention via SQLAlchemy ORM

## 🚀 Key Features

### 👥 User Roles
- **Students**: View marks, attendance, behavior records
- **Teachers**: Mark attendance, enter grades, manage classrooms
- **Parents**: Monitor children's progress
- **HR/CEO**: Asset management, staff oversight
- **School Executives**: Institutional analytics
- **Government Officials**: High-level reporting
- **Librarians**: Book checkout, attendance tracking
- **System Admins**: Full system configuration

### 📚 Academic Management
- Attendance tracking (student & staff)
- Grade/marks entry and reporting
- Behavior incident logging
- Performance analytics

### 🏛️ Administrative Features
- Multi-tier request approval system
- Asset lifecycle management
- Lab equipment tracking
- Comprehensive reporting

### 💬 Communication
- Real-time chat messaging
- Role-based channels
- Notification system
- Contact directory

### 🎭 Talent Club Ecosystem
- Club creation & proposals
- Member management
- Feed posts & reactions
- Leader elections
- Community messaging

## 🔄 Migration from Monolith

The original 25,000+ line `app.py` has been successfully decomposed:

1. **Models extracted** → `blueprints/models.py`
2. **Routes grouped by domain** → Individual blueprint files
3. **Shared utilities** → `blueprints/utils.py`
4. **No circular dependencies** → Clean import hierarchy

### Dependency Graph (Acyclic)

```
app.py
  │
  ├── blueprints/__init__.py
  │     │
  │     ├── models.py (base - no internal imports)
  │     ├── utils.py (imports only from models)
  │     └── [all other blueprints] (import from models & utils only)
  │
  └── No circular imports! ✅
```

## 🧪 Testing

```bash
# Run tests
pytest

# Check for circular dependencies
python -c "from blueprints import *; print('✅ No circular dependencies!')"
```

## 📊 Database Schema

The system uses **50+ SQLAlchemy models** organized into domains:

- **Core**: User, Role, TeacherProfile, Student, Parent
- **Communication**: Message, Notification, Channel, SocialGroup
- **Tasks**: Task, UserTask, TaskHistory
- **Requests**: Request, RequestHistory
- **Assets**: Asset, AssetCategory, AssetReport, Lab
- **Library**: BookCheckout, LibraryLog
- **Talent Clubs**: TalentClub, Membership, Feed, Community, Election
- **Academic**: Attendance, Mark, BehaviorRecord
- **Social**: GlobalPost, GlobalComment, GlobalLike
- **Files**: File

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Maintainers

- Development Team

## 🙏 Acknowledgments

- Flask community
- SQLAlchemy contributors
- All open-source libraries used

---

**Built with ❤️ using Flask Blueprints**
