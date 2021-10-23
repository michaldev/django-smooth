from pydantic import BaseModel


class SmoothBaseActionType(BaseModel):
    name: str


class SmoothCustom(SmoothBaseActionType):
    name = 'custom'
    js_code: str


class SmoothAddClass(SmoothBaseActionType):
    name = 'add_class'
    class_name: str


class SmoothRemoveClass(SmoothBaseActionType):
    name = 'remove_class'
    class_name: str


class SmoothAdd(SmoothBaseActionType):
    name = 'add'
    rendered_html: str


class SmoothRemove(SmoothBaseActionType):
    name = 'remove'


class SmoothIncrement(SmoothBaseActionType):
    name = 'increment'
    val: float


class SmoothDecrement(SmoothBaseActionType):
    name = 'decrement'
    val: float


class SmoothSet(SmoothBaseActionType):
    name = 'set'
    rendered_html: str


class SmoothAction(BaseModel):
    action_type: SmoothBaseActionType
    elements: list[str]


class SmoothResponse(BaseModel):
    actions: list[SmoothAction]
