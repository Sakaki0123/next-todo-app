'use server';

interface FormState {
    error: string;
}

export const createTask = async (taskId: number, state:FormState, formData: FormData) => {
    // DBにタスクを作成する
    console.log('タスクが作成されました');
    console.log('Task ID:', taskId);
    console.log(formData.get('name'));
    state.error = 'サーバーエラーが発生しました。';
    return state;
}
